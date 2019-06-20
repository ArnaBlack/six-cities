import * as React from 'react';

import {SortingType} from '../../constants';

interface Props {
  type: string,
  isActive: boolean,
  onSelectType: (type: string) => void,
}

class PlaceSortingType extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._handleTypeClick = this._handleTypeClick.bind(this);
  }

  render() {
    const {
      type,
      isActive,
    } = this.props;
    const activeClass = isActive ? `places__option--active` : ``;

    return <li
      className={`places__option ${activeClass}`}
      tabIndex={0}
      onClick={this._handleTypeClick}
    >
      {SortingType[type]}
    </li>;
  }

  _handleTypeClick() {
    const {
      type,
      onSelectType,
    } = this.props;

    onSelectType(type);
  }
}

export default PlaceSortingType;
