import * as React from 'react';
import {Link} from 'react-router-dom';
import {
  Offer,
} from '../../types';

const MAX_RATING = 5;

interface Props {
  offer: Offer,
  onImageClick: (offer: Offer) => void,
}

class PlaceCard extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._handleImageClick = this._handleImageClick.bind(this);
  }

  render() {
    const {
      id,
      previewImage,
      isPremium,
      price,
      isFavorite,
      title,
      type,
      rating,
    } = this.props.offer;
    const ratingWidth = Math.round(rating) * 100 / MAX_RATING;
    const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

    const premiumMark = isPremium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null;

    return <article className="cities__place-card place-card">
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={this._handleImageClick}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${favoriteClass}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>;
  }

  _handleImageClick(evt) {
    evt.preventDefault();
    const {offer, onImageClick} = this.props;
    onImageClick(offer);
  }
}

export default PlaceCard;
