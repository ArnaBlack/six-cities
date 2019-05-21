import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cityCoordinates,
      offers,
    } = this.props;

    return <Main
      cityCoordinates={cityCoordinates}
      offers={offers}
    />;
  }
}

App.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
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
};

App.defaultProps = {
  offers: [],
};

export default App;
