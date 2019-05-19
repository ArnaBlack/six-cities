import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlaceList = (props) => {
  const {
    offers,
    onSelectOffer,
  } = props;

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <PlaceCard
      key={`offer-${offer.id}`}
      offer={offer}
      onImageClick={onSelectOffer}
    />)}
  </div>;
};

PlaceList.propTypes = {
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
  onSelectOffer: PropTypes.func.isRequired,
};

PlaceList.defaultProps = {
  offers: [],
};

export default PlaceList;
