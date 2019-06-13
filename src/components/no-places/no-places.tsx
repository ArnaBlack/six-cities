import * as React from 'react';
import {connect} from 'react-redux';

import {getCurrentCity} from '../../store/data/selectors';
import {City} from '../../types';

interface Props {
  currentCity: City,
}

const NoPlaces = (props: Props) => {
  const {currentCity} = props;

  return <div className="cities__places-wrapper">
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in&nbsp;
            {currentCity.name}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  </div>;
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

export {NoPlaces};
export default connect(mapStateToProps)(NoPlaces);
