import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {getCurrentCity} from '../../store/app/selectors';

const URL_TEMPLATE = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const TILE_OPTIONS = {
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

const DEFAULT_ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39],
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [27, 39],
});

const options = {
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
      .tileLayer(URL_TEMPLATE, TILE_OPTIONS)
      .addTo(this._map);
    this._renderMarkers();
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

Map.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
  selectedOffer: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

Map.defaultProps = {
  offers: [],
  selectedOffer: null,
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
