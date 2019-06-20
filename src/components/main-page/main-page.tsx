import * as React from 'react';
import {connect} from 'react-redux';

import withSortedItems from '../../hocs/with-sorted-items/with-sorted-items';

import Sprite from '../sprite/sprite';
import Header from '../header/header';
import Cities from '../cities/cities';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import Map from '../map/map';

import {getOffersByCity} from '../../store/offers/selectors';
import {Offer} from '../../types';

const PlacesWrapped = withSortedItems(Places);

interface Props {
  selectedOffer: Offer,
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
      selectedOffer,
      offers,
      onSelectOffer,
    } = this.props;
    const hasOffers = offers && offers.length;
    const emptyClass = !hasOffers ? `page__main--index-empty` : ``;

    return <div className="page page--gray page--main">
      <Header />
      <Sprite />
      <main className={`page__main page__main--index ${emptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <Cities onCityClick={this._onCityClick} />
        </div>
        <div className="cities__places-wrapper">
          {!hasOffers
            ? <PlacesEmpty />
            : <div className="cities__places-container container">
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
  offers: getOffersByCity(state),
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
