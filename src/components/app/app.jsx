import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return <Main
      offers={offers}
      onOfferTitleClick={this._handleOfferTitleClick}
      onOfferImageClick={this._handleOfferImageClick}
    />;
  }

  _handleOfferTitleClick(evt) {
    evt.preventDefault();
  }

  _handleOfferImageClick(evt) {
    evt.preventDefault();
  }
}

App.propTypes = {
  offers: PropTypes.array,
};

App.defaultProps = {
  offers: [],
};

export default App;
