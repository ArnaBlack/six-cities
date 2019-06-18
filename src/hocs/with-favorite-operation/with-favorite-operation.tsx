import * as React from 'react';
import {connect} from 'react-redux';
import {Subtract} from 'utility-types';

import DataOperation from '../../store/data/operation/operation';

interface InjectedProps {
  updateOffer: ({isFavorite: boolean, id: number}) => void,
}

const withFavoriteOperation = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithFavorite extends React.PureComponent<T, null> {
    constructor(props) {
      super(props);

      this._onClick = this._onClick.bind(this);
    }

    render() {
      const {props} = this;

      return <Component
        {...props}
        onClick={this._onClick}
      />
    }

    _onClick() {
      const {
        isFavorite,
        id,
        updateOffer,
      } = this.props;
      const favoriteStatus = Number(!isFavorite);

      updateOffer({isFavorite: favoriteStatus, id});
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    updateOffer: ({isFavorite, id}) => dispatch(DataOperation.updateOffer({isFavorite, id}))
  });

  return connect(null, mapDispatchToProps)(WithFavorite);
};

export default withFavoriteOperation;
