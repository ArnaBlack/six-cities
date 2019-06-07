import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DataActionCreator from '../../store/data/action-creator/action-creator';

class CityLink extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const {
      city,
      isActive,
    } = this.props;

    const activeClass = isActive ? `tabs__item--active` : ``;

    return <a
      className={`locations__item-link tabs__item ${activeClass}`}
      href="#"
      onClick={this._handleClick}
    >
      <span>{city.name}</span>
    </a>;
  }

  _handleClick(evt) {
    evt.preventDefault();
    const {
      city,
      onCityClick,
      onClick,
    } = this.props;
    onCityClick();
    onClick(city);
  }
}

CityLink.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => dispatch(DataActionCreator.changeCity(city)),
});

export {CityLink};
export default connect(null, mapDispatchToProps)(CityLink);
