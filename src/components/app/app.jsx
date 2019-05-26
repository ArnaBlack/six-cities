import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreators from '../../store/actions/action-creators';

class App extends PureComponent {
  render() {
    const {
      currentCity,
      offers,
    } = this.props;

    return <Main
      currentCity={currentCity}
      offers={offers}
    />;
  }

  componentDidMount() {
    const {getOffers} = this.props;
    getOffers();
  }
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })),
  getOffers: PropTypes.func.isRequired,
};

App.defaultProps = {
  offers: [],
};

const mapStateToProps = (state, props) => ({
  ...props,
  currentCity: state.city,
  offers: state.offers.filter((it) => it.city === state.city),
});

const mapDispatchToProps = (dispatch) => ({
  getOffers: () => dispatch(ActionCreators.getOffers())
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
