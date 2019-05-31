import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

const URL_TEMPLATE = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const TILE_OPTIONS = {
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

const ZOOM = 12;
const DEFAULT_ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39],
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [27, 39],
});

const options = {
  zoom: ZOOM,
  zoomControl: false,
  marker: true
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markersGroup = null;
    this._markers = {};
  }

  render() {
    return <section className="cities__map map" id="map" />;
  }

  componentDidMount() {
    const {center} = this.props;
    this._map = leaflet.map(`map`, Object.assign({}, options, {center}));
    this._map.setView(center, ZOOM);
    leaflet
      .tileLayer(URL_TEMPLATE, TILE_OPTIONS)
      .addTo(this._map);
    this._renderMarkers();
  }

  componentDidUpdate(prevProps) {
    const prevActiveOfferId = prevProps.activeOfferId;
    const {
      center,
      activeOfferId,
    } = this.props;

    if (activeOfferId && prevActiveOfferId !== activeOfferId) {
      const prevMarker = this._markers[prevActiveOfferId];

      if (prevMarker) {
        prevMarker.setIcon(DEFAULT_ICON);
      }

      this._setActiveMarker();
    } else {
      this._removeMarkers();
      this._renderMarkers();
      this._map.setView(center, ZOOM);
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
      const marker = leaflet.marker(it.coordinates, {icon: DEFAULT_ICON});
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
    const {
      offers,
      activeOfferId,
    } = this.props;
    const activeOffer = offers.find((it) => it.id === activeOfferId);
    this._markers[activeOfferId].setIcon(ACTIVE_ICON);
    this._map.panTo(activeOffer.coordinates);
  }
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })),
  activeOfferId: PropTypes.number,
};

Map.defaultProps = {
  offers: [],
  activeOfferId: null,
};

const mapStateToProps = (state, props) => ({
  ...props,
  center: state.cities.find((it) => it.name === state.city).coordinates,
});

export {Map};
export default connect(mapStateToProps)(Map);
