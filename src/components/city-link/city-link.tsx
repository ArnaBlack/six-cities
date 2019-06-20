import * as React from 'react';
import {connect} from 'react-redux';

import CityActionCreator from '../../store/city/action-creator/action-creator';

import {City} from '../../types';

interface Props {
  city: City,
  isActive: boolean,
  onCityClick: () => void,
  onClick: (city: City) => void,
}

class CityLink extends React.Component<Props, null> {
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
      <span>
        {city.name}
      </span>
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

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => dispatch(CityActionCreator.changeCity(city)),
});

export {CityLink};
export default connect(null, mapDispatchToProps)(CityLink);
