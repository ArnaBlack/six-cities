import * as React from 'react';
import {connect} from 'react-redux';
import {Subtract} from 'utility-types';

import {getOffersByCity} from '../../store/offers/selectors';
import {makeSortFunction} from '../../store/offers/util';

import {Offer} from '../../types';
import {SortingType} from '../../constants';

interface InjectedProps {
  offers: Offer[],
  onSortingTypeChange: (type: string) => void,
}

interface State {
  type: string,
}

const withSortedItems = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithSortedItems extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        type: SortingType.POPULAR,
      };

      this._onSortingTypeChange = this._onSortingTypeChange.bind(this);
    }

    render() {
      const {type} = this.state;
      const {props} = this;
      const {offers} = props;
      const sortedOffers = [...offers].sort(makeSortFunction(type));

      return <Component
        {...props}
        offers={sortedOffers}
        onSortingTypeChange={this._onSortingTypeChange}
      />
    }

    _onSortingTypeChange(type) {
      this.setState({type: SortingType[type]});
    }
  }

  const mapStateToProps = (state, props) => ({
    ...props,
    offers: getOffersByCity(state),
  });

  return connect(mapStateToProps)(WithSortedItems);
};


export default withSortedItems;
