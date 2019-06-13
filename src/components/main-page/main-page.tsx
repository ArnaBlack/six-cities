import * as React from 'react';
import {connect} from 'react-redux';

import withSortedItems from '../../hocs/with-sorted-items/with-sorted-items';

import Sprite from '../sprite/sprite';
import Header from '../header/header';
import Cities from '../cities/cities';
import Places from '../places/places';
import Map from '../map/map';

import {
  getOffersByCity,
  getCurrentCity,
} from '../../store/data/selectors';

import {
  Offer,
  City,
} from '../../types';

const PlacesWrapped = withSortedItems(Places);

interface Props {
  selectedOffer: Offer,
  currentCity: City,
  offers: Offer[],
  onSelectOffer: (offer: Offer | null) => void,
}

class MainPage extends React.PureComponent<Props, null> {
  public static defaultProps = {
    selectedOffer: null,
    offers: [],
  };

  constructor(props) {
    super(props);

    this._onCityClick = this._onCityClick.bind(this);
  }

  render() {
    const {
      currentCity,
      selectedOffer,
      offers,
      onSelectOffer,
    } = this.props;
    let mainClasses = `page__main page__main--index`;

    if (!offers.length) {
      mainClasses = `page__main page__main--index page__main--index-empty`;
    }

    const noPlaces = <div className="cities__places-wrapper">
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
        <div className="cities__right-section">
        </div>
      </div>
    </div>;

    return <div className="page page--gray page--main">
      <Header />
      <Sprite />
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <Cities onCityClick={this._onCityClick} />
        </div>
        <div className="cities__places-wrapper">
          {!offers.length ? noPlaces : <div className="cities__places-container container">
            <PlacesWrapped onSelectOffer={onSelectOffer} />
            <div className="cities__right-section">
              <Map
                mapClass="cities__map"
                offers={offers}
                selectedOffer={selectedOffer}
              />
            </div>
          </div>}
        </div>
      </main>
    </div>
  }

  componentDidMount() {
    document.title = `6 cities`;
  }

  componentWillUnmount() {
    const {onSelectOffer} = this.props;
    onSelectOffer(null);
  }

  _onCityClick() {
    const {onSelectOffer} = this.props;
    onSelectOffer(null);
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: getCurrentCity(state),
  offers: getOffersByCity(state),
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
