import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({offers, onOfferTitleClick}) => <Main
  offers={offers}
  onOfferTitleClick={onOfferTitleClick}
/>;

App.propTypes = {
  offers: PropTypes.array,
  onOfferTitleClick: PropTypes.func.isRequired,
};

App.defaultProps = {
  offers: [],
};

export default App;
