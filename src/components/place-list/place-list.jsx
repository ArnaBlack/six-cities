import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };

    this._onImageClick = this._onImageClick.bind(this);
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard
        key={`offer-${offer.id}`}
        offer={offer}
        onTitleClick={this._onTitleClick}
        onImageClick={this._onImageClick}
      />)}
    </div>;
  }

  _onTitleClick() {}

  _onImageClick(id) {
    this.setState({
      selected: id,
    });
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

PlaceList.defaultProps = {
  offers: [],
};

export default PlaceList;
