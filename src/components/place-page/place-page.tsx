import * as React from 'react';
import {connect} from 'react-redux';

import Loader from '../loader/loader';
import Sprite from '../sprite/sprite';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';

import UserOperation from '../../store/user/operation/operation';
import DataOperation from '../../store/data/operation/operation';
import {
  getLoadingState,
  getOffer,
  getNearestOffers,
} from '../../store/data/selectors';

import {Offer} from '../../types';

const MAX_IMAGES = 6;
const MAX_RATING = 5;
const PlaceTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

interface Props {
  isLoading: boolean,
  offer: Offer,
  nearestOffers: Offer[],
  checkAuth: () => void,
  loadOffers: () => void,
}

class PlacePage extends React.PureComponent<Props, null> {
  render() {
    const {
      isLoading,
      offer,
      nearestOffers,
    } = this.props;
    const {
      bedrooms,
      description,
      goods,
      host,
      id,
      images,
      isFavorite,
      isPremium,
      maxAdults,
      price,
      rating,
      title,
      type,
    } = offer;

    const gallery = images.slice(0, MAX_IMAGES).map((it, i) => <div
      key={`image-${id}-${i}`}
      className="property__image-wrapper"
    >
      <img className="property__image" src={it} alt={title} />
    </div>);
    const isFavoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;
    const premiumMark = isPremium ? <div className="property__mark"><span>Premium</span></div> : null;
    const ratingWidth = Math.round(rating) * 100 / MAX_RATING;
    const insideList = goods.map((it, i) => <li
      key={`good-${id}-${i}`}
      className="property__inside-item"
    >
      {it}
    </li>);
    const isHostProClass = host.isPro ? `property__avatar-wrapper--pro` : ``;
    const hostStatus = host.isPro ? <span className="property__user-status">Pro</span> : null;

    return isLoading ? <Loader /> : <React.Fragment>
      <Sprite />
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {gallery}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumMark}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavoriteClass}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingWidth}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {PlaceTypes[type] || `Entire place`}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms === 1 ? `1 Bedroom` : `${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults === 1 ? `1 adult` : `${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {insideList}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${isHostProClass}`}>
                    <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {hostStatus}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews placeId={id} />
            </div>
          </div>
          <Map
            offers={[...nearestOffers, offer]}
            selectedOffer={offer}
            mapClass="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList
              offers={nearestOffers}
              listClass="near-places__list"
              cardClass="near-places__card"
            />
          </section>
        </div>
      </main>
    </React.Fragment>
  }

  componentDidMount() {
    const {
      checkAuth,
      loadOffers,
    } = this.props;

    checkAuth();
    loadOffers();
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  isLoading: getLoadingState(state),
  offer: getOffer(state, props.match.params.id),
  nearestOffers: getNearestOffers(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(UserOperation.checkAuth()),
  loadOffers: () => dispatch(DataOperation.loadOffers()),
});

export {PlacePage}
export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);
