import * as React from 'react';
import {connect} from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withTransformProps from '../../hocs/with-transform-props/with-transform-props';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';

import Loader from '../loader/loader';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PlacePage from '../place-page/place-page';

import UserOperation from '../../store/user/operation/operation';
import OffersOperation from '../../store/offers/operation/operation';
import {getLoadingState} from '../../store/offers/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

import {City} from '../../types';

const transformActiveToSelected = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});
const MainPageWrapped = withActiveItem(withTransformProps(transformActiveToSelected)(MainPage));
const FavoritesPageWrapped = withPrivateRoute(FavoritesPage);

interface Props {
  isLoading: boolean,
  currentCity: City,
  isAuthorizationRequired: boolean,
  checkAuth: () => void,
  loadOffers: () => void,
}

class App extends React.PureComponent<Props, null> {
  render() {
    const {
      isLoading,
      isAuthorizationRequired,
    } = this.props;

    return isLoading ? <Loader /> : <Switch>
      <Route path="/" exact component={MainPageWrapped} />
      <Route path="/login" render={() => isAuthorizationRequired ? <SignInPage /> : <Redirect to="/" />}/>
      <Route path="/favorites" component={FavoritesPageWrapped} />
      <Route path="/offer/:id" component={PlacePage} />
      <Redirect from="*" to="/" />
    </Switch>;
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
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(UserOperation.checkAuth()),
  loadOffers: () => dispatch(OffersOperation.loadOffers()),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
