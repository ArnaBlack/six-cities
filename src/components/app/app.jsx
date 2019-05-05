import React, {Component} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.onOfferTitleClick = this.onOfferTitleClick.bind(this);
  }

  onOfferTitleClick(evt) {
    const {onOfferTitleClick} = this.props;

    if (typeof onOfferTitleClick === `function`) {
      evt.preventDefault();
      onOfferTitleClick();
    }
  }

  render() {
    const {offers} = this.props;

    return <Main
      offers={offers}
      onOfferTitleClick={this.onOfferTitleClick}
    />;
  }
}

App.propTypes = {
  offers: PropTypes.array,
  onOfferTitleClick: PropTypes.func,
};

App.defaultProps = {
  offers: [],
  onOfferTitleClick: () => {},
};

export default App;
