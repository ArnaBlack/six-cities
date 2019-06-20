import * as React from 'react';
import PlaceSortingType from '../place-sorting-type/place-sorting-type';
import {getOffers} from '../../store/offers/selectors';
import {SortingType} from '../../constants';

interface Props {
  isOpened: boolean,
  activeItem: string,
  onSelectItem: (activeItem: string) => void,
  onToggleSorting: () => void,
  onChangeType: (type: string) => void,
}

class PlaceSorting extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._onSelectType = this._onSelectType.bind(this);
  }

  render() {
    const {
      activeItem,
      isOpened,
      onToggleSorting,
    } = this.props;
    const openedClass = isOpened ? `places__options--opened` : ``;

    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onToggleSorting}>
        {SortingType[activeItem] || SortingType.POPULAR}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openedClass}`}>
        {Object.keys(SortingType).map((it) => <PlaceSortingType
          key={`sorting-type-${it}`}
          type={it}
          isActive={activeItem === it}
          onSelectType={this._onSelectType}
        />)}
      </ul>
    </form>;
  }

  _onSelectType(type) {
    const {
      onSelectItem,
      onToggleSorting,
      onChangeType,
    } = this.props;

    onChangeType(type);
    onSelectItem(type);
    onToggleSorting();
  }
}

export default PlaceSorting
