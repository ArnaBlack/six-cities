import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreators from '../../store/actions/action-creators';

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
      <span>{city}</span>
    </a>;
  }

  _handleClick(evt) {
    evt.preventDefault();
    const {
      city,
      onClick,
    } = this.props;
    onClick(city);
  }
}

CityLink.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => dispatch(ActionCreators.changeCity(city)),
});

export {CityLink};
export default connect(null, mapDispatchToProps)(CityLink);
