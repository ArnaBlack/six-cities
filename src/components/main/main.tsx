import * as React from 'react';
import Cities from '../cities/cities';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {
  getOffersByCity,
  getCurrentCity,
} from '../../store/data/selectors';
import {getUser} from '../../store/user/selectors';
import {
  Offer,
  City,
  User,
} from '../../types';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

interface Props {
  selectedOffer: Offer,
  currentCity: City,
  offers: Offer[],
  user: User,
  onSelectOffer: (offer: Offer | null) => void,
}

class Main extends React.PureComponent<Props, null> {
  public static defaultProps = {
    selectedOffer: null,
    offers: [],
    user: null,
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
      user,
      onSelectOffer,
    } = this.props;

    return <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
          </symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink className="header__nav-link header__nav-link--profile" to={user ? `/favorites` : `/login`}>
                    {user ? <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{backgroundImage: `url("${BASE_URL}${user.avatarUrl}")`}}
                    >
                    </div> : null}
                    <span className="header__user-name user__name">{user ? user.email : `Sign In`}</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <Cities onCityClick={this._onCityClick} />
        </div>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
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
          </div>
        </div>
      </main>
    </React.Fragment>;
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
  user: getUser(state),
});

export {Main};
export default connect(mapStateToProps)(Main);