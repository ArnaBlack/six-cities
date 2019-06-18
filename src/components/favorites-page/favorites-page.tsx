import * as React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import Sprite from '../sprite/sprite';
import Header from '../header/header';
import PlaceCard from '../place-card/place-card';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from '../footer/footer';

import DataOperation from '../../store/data/operation/operation';
import {getFavorites} from '../../store/data/selectors';

interface Props {
  favorites: object,
  loadFavorites: () => void,
}

class FavoritesPage extends React.PureComponent<Props, null> {
  public static defaultProps = {
    favorites: [],
  };

  render() {
    const {favorites} = this.props;
    const hasFavorites = favorites && Object.keys(favorites).length;
    const emptyClass = !hasFavorites ? `page__main--favorites-empty` : ``;

    return <div className="page">
      <Header />
      <Sprite />
      {!hasFavorites
      ? <FavoritesEmpty />
      : <main className={`page__main page__main--favorites ${emptyClass}`}>
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favorites).map(([city, offers]) => <li
                  key={`favorite-${city}`}
                  className="favorites__locations-items"
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <NavLink
                        className="locations__item-link"
                        to="/"
                      >
                      <span>
                        {city}
                      </span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((it) => <PlaceCard
                      key={`${city}-${it.id}`}
                      cardClass="favorites__card"
                      imageWrapperClass="favorites__image-wrapper"
                      infoClass="favorites__card-info"
                      offer={it}
                    />)}
                  </div>
                </li>)}
              </ul>
            </section>
          </div>
        </main>}
      <Footer />
    </div>
  }

  componentDidMount() {
    const {loadFavorites} = this.props;
    document.title = `6 cities: favorites`;
    loadFavorites();
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(DataOperation.loadFavorites()),
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
