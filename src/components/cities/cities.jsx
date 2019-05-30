import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CityLink from '../city-link/city-link.jsx';

const Cities = ({currentCity, cities}) => <section className="locations container">
  <ul className="locations__list tabs__list">
    {cities.map((it) => <li
      key={`city-${it}`}
      className="locations__item"
    >
      <CityLink
        city={it}
        isActive={it === currentCity}
      />
    </li>)}
  </ul>
</section>;

Cities.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: state.city,
  cities: [...new Set(state.offers.map((it) => it.city))],
});

export {Cities};
export default connect(mapStateToProps)(Cities);
