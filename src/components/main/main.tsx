import * as React from 'react';
import {connect} from 'react-redux';
import Sprite from '../sprite/sprite';
import Header from '../header/header';
import Cities from '../cities/cities';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {
  getOffersByCity,
  getCurrentCity,
} from '../../store/data/selectors';
import {
  Offer,
  City,
} from '../../types';

interface Props {
  selectedOffer: Offer,
  currentCity: City,
  offers: Offer[],
  onSelectOffer: (offer: Offer | null) => void,
}

class Main extends React.PureComponent<Props, null> {
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
              We could not find any property availbale at the moment in&nbsp;
              {currentCity.name}
            </p>
          </div>
        </section>
        <div className="cities__right-section">
        </div>
      </div>
    </div>;

    return <React.Fragment>
      <Header />
      <Sprite />
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <Cities onCityClick={this._onCityClick} />
        </div>
        <div className="cities__places-wrapper">
          {!offers.length ? noPlaces : <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by&nbsp;</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlaceList
                offers={offers}
                onSelectOffer={onSelectOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                selectedOffer={selectedOffer}
              />
            </div>
          </div>}
        </div>
      </main>
    </React.Fragment>
  }

  componentDidMount() {
    document.title = `6 cities`;
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

export {Main};
export default connect(mapStateToProps)(Main);
