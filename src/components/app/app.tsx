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
import withPageWrapper from '../../hocs/with-page-wrapper/with-page-wrapper';

import Loader from '../loader/loader';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import PlacePage from '../place-page/place-page';

import UserOperation from '../../store/user/operation/operation';
import DataOperation from '../../store/data/operation/operation';
import {getLoadingState} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

import {City} from '../../types';

const transformActiveToSelected = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});

const MainPageWrapped = withPageWrapper(
  withActiveItem(
    withTransformProps(
      transformActiveToSelected)(MainPage)
  ), `page page--gray page--MainPage`
);
const SignInWrapped = withPageWrapper(SignIn, `page page--gray page--login`);
const FavoritesWrapped = withPageWrapper(
  withPrivateRoute(Favorites), `page`
);

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
      <Route path="/" exact component={MainPageWrapped}/>
      <Route path="/login" render={() => isAuthorizationRequired ? <SignInWrapped /> : <Redirect to="/" />}/>
      <Route path="/favorites" component={FavoritesWrapped} />
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
  loadOffers: () => dispatch(DataOperation.loadOffers()),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
