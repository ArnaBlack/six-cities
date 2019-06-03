import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import withActiveItem from '../../hocs/with-active-item/with-actvie-item.jsx';
import withTransformProps from '../../hocs/with-transform-props/with-transform-props.jsx';
import Loader from '../loader/loader.jsx';
import {getLoadingState} from '../../store/data/selectors';

const transformActiveToSelected = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});

const MainWrapped = withActiveItem(withTransformProps(transformActiveToSelected)(Main));

class App extends PureComponent {
  render() {
    const {isLoading} = this.props;

    return isLoading ? <Loader /> : <MainWrapped />;
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  ...props,
  isLoading: getLoadingState(state),
});

export {App};
export default connect(mapStateToProps)(App);
