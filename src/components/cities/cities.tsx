import * as React from 'react';
import {connect} from 'react-redux';

import CityLink from '../city-link/city-link';

import {getCurrentCity} from '../../store/city/selectors';
import {getCities} from '../../store/offers/selectors';

import {City} from '../../types';

interface Props {
  currentCity: City,
  cities: City[],
  onCityClick: () => void,
}

const Cities = (props: Props) => {
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

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
  cities: getCities(state),
});

export {Cities};
export default connect(mapStateToProps)(Cities);
