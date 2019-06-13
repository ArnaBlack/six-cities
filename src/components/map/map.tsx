import * as React from 'react';
import * as leaflet from 'leaflet';
import {connect} from 'react-redux';

import {getCurrentCity} from '../../store/data/selectors';

import {
  City,
  Offer,
} from '../../types';
import {
  MapParams,
  PinParams,
} from '../../constants';

const DEFAULT_ICON = leaflet.icon({
  iconUrl: PinParams.URL,
  iconSize: PinParams.SIZES,
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: PinParams.ACTIVE_URL,
  iconSize: PinParams.SIZES,
});

const options = {
  zoomControl: false,
  marker: true
};

interface Props {
  mapClass?: string,
  currentCity: City,
  offers: Offer[],
  selectedOffer: Offer,
}

class Map extends React.PureComponent<Props, null> {
  _map: typeof leaflet;
  _markersGroup: typeof leaflet;
  _markers: {};

  public static defaultProps = {
    offers: [],
    selectedOffer: null,
  };

  constructor(props) {
    super(props);

    this._markers = {};
  }


  render() {
    const {mapClass} = this.props;

    return <section className={`map ${mapClass}`} id="map" />;
  }

  componentDidMount() {
    const {currentCity} = this.props;
    const {location} = currentCity;
    const {zoom} = location;
    const center = [location.latitude, location.longitude];
    this._map = leaflet.map(`map`, {
      options,
      center,
      zoom,
    });
    this._setView(currentCity.location);
    leaflet
      .tileLayer(MapParams.TEMPLATE_URL, MapParams.TILE_OPTIONS)
      .addTo(this._map);
    this._renderMarkers();
    this._setActiveMarker();
  }

  componentDidUpdate(prevProps) {
    const prevActiveOffer = prevProps.selectedOffer;
    const {
      currentCity,
      selectedOffer,
    } = this.props;

    if (selectedOffer) {
      if (prevActiveOffer && prevActiveOffer.id !== selectedOffer.id) {
        const prevMarker = this._markers[prevActiveOffer.id];

        if (prevMarker) {
          prevMarker.setIcon(DEFAULT_ICON);
        }
      }

      this._setActiveMarker();
      this._setView(selectedOffer.location);
    } else {
      this._removeMarkers();
      this._renderMarkers();
      this._setView(currentCity.location);
    }
  }

  componentWillUnmount() {
    this._map.remove();
    this._map = null;
  }

  _renderMarkers() {
    const {offers} = this.props;
    let markers = [];

    offers.forEach((it) => {
      const coordinates = [it.location.latitude, it.location.longitude];
      const marker = leaflet.marker(coordinates, {icon: DEFAULT_ICON});
      this._markers[it.id] = marker;
      markers.push(marker);
    });

    this._markersGroup = leaflet.layerGroup(markers);
    this._markersGroup.addTo(this._map);
  }

  _removeMarkers() {
    this._markersGroup.clearLayers();
    this._markersGroup = null;
    this._markers = {};
  }

  _setActiveMarker() {
    const {selectedOffer} = this.props;

    if (!selectedOffer) {
      return;
    }

    this._markers[selectedOffer.id].setIcon(ACTIVE_ICON);
    const coordinates = [selectedOffer.location.latitude, selectedOffer.location.longitude];
    this._map.panTo(coordinates);
  }

  _setView(location) {
    const {
      latitude,
      longitude,
      zoom,
    } = location;
    const center = [latitude, longitude];
    this._map.setView(center, zoom);
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
