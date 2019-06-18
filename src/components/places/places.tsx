import * as React from 'react';
import {connect} from 'react-redux';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withToggleSorting from '../../hocs/with-toggle-sorting/with-toggle-sorting';

import PlaceSorting from '../place-sorting/place-sorting';
import PlaceList from '../place-list/place-list';

import {
  getOffersByCity,
  getCurrentCity,
} from '../../store/data/selectors';
import {SortingTypes} from '../../constants';
import {City, Offer} from "../../types";

const PlaceSortingWrapped = withActiveItem(withToggleSorting(PlaceSorting));

interface Props {
  offers: Offer[],
  currentCity: City,
  onSelectOffer: (offer: Offer | null) => void,
  onSortingTypeChange: (type: string) => void,
}

const Places = (props: Props) => {
  const {
    offers,
    currentCity,
    onSelectOffer,
    onSortingTypeChange,
  } = props;

  return <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
    <PlaceSortingWrapped
      onChangeType={onSortingTypeChange}
    />
    <PlaceList
      offers={offers}
      onSelectOffer={onSelectOffer}
      listClass="cities__places-list tabs__content"
      cardClass="cities__place-card"
      imageWrapperClass="cities__image-wrapper"
    />
  </section>;
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
});

export {Places};
export default connect(mapStateToProps)(Places);
