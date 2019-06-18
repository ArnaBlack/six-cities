import * as React from 'react';
import {Link} from 'react-router-dom';

import Bookmark from '../bookmark/bookmark';
import Rating from '../rating/rating';

import {Offer} from '../../types';

interface Props {
  cardClass?: string,
  offer: Offer,
  onImageClick?: (offer: Offer) => void,
}

class PlaceCard extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._handleImageClick = this._handleImageClick.bind(this);
  }

  render() {
    const {
      cardClass,
      offer,
    } = this.props;
    const {
      id,
      previewImage,
      isPremium,
      price,
      isFavorite,
      title,
      type,
      rating,
    } = offer;
    const premiumMark = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;

    return <article className={`place-card ${cardClass}`}>
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={this._handleImageClick}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            id={id}
            isFavorite={isFavorite}
            className="place-card"
            width={18}
            height={19}
          />
        </div>
        <Rating
          ratingClass="place-card__rating"
          starsClass="place-card__stars "
          hasValue={false}
          rating={rating}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>;
  }

  _handleImageClick(evt) {
    evt.preventDefault();

    const {
      offer,
      onImageClick
    } = this.props;

    return typeof onImageClick === 'function' && onImageClick(offer);
  }
}

export default PlaceCard;
