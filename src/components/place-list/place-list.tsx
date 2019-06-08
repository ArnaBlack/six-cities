import * as React from 'react';
import PlaceCard from '../place-card/place-card';
import {
  Offer,
} from '../../types';

interface Props {
  offers: Offer[],
  onSelectOffer: (offer: Offer) => void,
}

const PlaceList = (props: Props) => {
  const {
    offers,
    onSelectOffer,
  } = props;

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <PlaceCard
      key={offer.id}
      offer={offer}
      onImageClick={onSelectOffer}
    />)}
  </div>;
};

PlaceList.defaultProps = {
  offers: [],
};

export default PlaceList;
