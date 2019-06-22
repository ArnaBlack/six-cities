import * as React from 'react';
import {connect} from 'react-redux';
import FavoritesOperation from '../../store/favorites/operation/operation';

interface Props {
  id: number,
  isFavorite: boolean,
  className: string,
  width: number,
  height: number,
  onClick: () => void,
  updateFavorites: ({isFavorite: boolean, id: number}) => void,
}

class Bookmark extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    const {
      className,
      isFavorite,
      width,
      height,
    } = this.props;
    const activeClass = isFavorite ? `${className}__bookmark-button--active` : ``;

    return <button
      className={`${className}__bookmark-button button ${activeClass}`}
      type="button"
      onClick={this._onClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
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

export {Bookmark};
export default connect(null, mapDispatchToProps)(Bookmark);
