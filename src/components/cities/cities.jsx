import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CityLink from '../city-link/city-link.jsx';

const Cities = (props) => {
  const {
    currentCity,
    cities,
    onCityClick,
  } = props;

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((it) => <li
        key={`city-${it.name}`}
        className="locations__item"
      >
        <CityLink
          city={it}
          isActive={it.name === currentCity.name}
          onCityClick={onCityClick}
        />
      </li>)}
    </ul>
  </section>;
};

Cities.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: state.city,
  cities: Object.values(state.offers.reduce((accum, {city}) => {
    if (!accum[city.name]) {
      accum[city.name] = city;
    }

    return accum;
  }, {})),
});

export {Cities};
export default connect(mapStateToProps)(Cities);
