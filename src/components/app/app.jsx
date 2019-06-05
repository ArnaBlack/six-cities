import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withTransformProps from '../../hocs/with-transform-props/with-transform-props.jsx';
import Loader from '../loader/loader.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {getLoadingState} from '../../store/data/selectors';
import DataOperation from '../../store/data/operation/operation';

const transformActiveToSelected = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});

const MainWrapped = withActiveItem(withTransformProps(transformActiveToSelected)(Main));

class App extends PureComponent {
  render() {
    const {
      isLoading,
    } = this.props;

    const content = <Switch>
      <Route path="/" exact component={MainWrapped} />
      <Route path="/login" component={SignIn} />
    </Switch>;

    return isLoading ? <Loader /> : content;
  }

  componentDidMount() {
    const {loadOffers} = this.props;
    loadOffers();
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
  loadOffers: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentCity: null,
};

const mapStateToProps = (state, props) => ({
  ...props,
  isLoading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(DataOperation.loadOffers()),
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
