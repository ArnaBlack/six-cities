import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({offers}) => <Main offers={offers} />;

App.propTypes = {
  offers: PropTypes.array,
};

App.defaultProps = {
  offers: [],
};

export default App;
