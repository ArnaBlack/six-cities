import * as React from 'react';
import {connect} from 'react-redux';
import {Subtract} from 'utility-types';

import FavoritesOperation from '../../store/favorites/operation/operation';

interface InjectedProps {
  updateFavorites: ({isFavorite: boolean, id: number}) => void,
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
        updateFavorites,
      } = this.props;
      const favoriteStatus = Number(!isFavorite);

      updateFavorites({isFavorite: favoriteStatus, id});
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    updateFavorites: ({isFavorite, id}) => dispatch(FavoritesOperation.updateFavorites({isFavorite, id}))
  });

  return connect(null, mapDispatchToProps)(WithFavorite);
};

export default withFavoriteOperation;
