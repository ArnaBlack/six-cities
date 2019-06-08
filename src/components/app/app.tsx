import * as React from 'react';
import Main from '../main/main';
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
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import {getLoadingState} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import UserOperation from '../../store/user/operation/operation';
import DataOperation from '../../store/data/operation/operation';
import {
  City,
} from '../../types';

const transformActiveToSelected = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});

const MainWrapped = withActiveItem(withTransformProps(transformActiveToSelected)(Main));

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

    const content = <Switch>
      <Route path="/" exact component={MainWrapped}/>
      <Route path="/login" render={() => {
        if (!isAuthorizationRequired) {
          return <Redirect to="/"/>;
        }

        return <SignIn />;
      }}/>
      <Route path="/favorites" render={() => {
        const FavoritesWrapped = withPrivateRoute(Favorites, isAuthorizationRequired);
        return <FavoritesWrapped />;
      }} />
      <Redirect to="/" />
    </Switch>;

    return isLoading ? <Loader /> : content;
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
