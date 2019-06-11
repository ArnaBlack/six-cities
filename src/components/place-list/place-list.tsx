import * as React from 'react';

import PlaceCard from '../place-card/place-card';

import {Offer} from '../../types';

interface Props {
  cardClass?: string,
  listClass?: string,
  offers: Offer[],
  onSelectOffer?: (offer: Offer) => void,
}

const PlaceList = (props: Props) => {
  const {
    cardClass,
    listClass,
    offers,
    onSelectOffer,
  } = props;

  return <div className={`places__list ${listClass}`}>
    {offers.map((offer) => <PlaceCard
      key={offer.id}
      cardClass={cardClass}
      offer={offer}
      onImageClick={onSelectOffer}
    />)}
  </div>;
};

export default PlaceList;
