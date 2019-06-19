import * as React from 'react';
import withFavoriteOperation from '../../hocs/with-favorite-operation/with-favorite-operation';

interface Props {
  id: number,
  isFavorite: boolean,
  className: string,
  width: number,
  height: number,
  onClick: () => void,
}

const Bookmark = (props: Props) => {
  const {
    className,
    isFavorite,
    width,
    height,
    onClick,
  } = props;
  const activeClass = isFavorite ? `${className}__bookmark-button--active` : ``;

  return <button
    className={`${className}__bookmark-button button ${activeClass}`}
    type="button"
    onClick={onClick}
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
};

export {Bookmark};
export default withFavoriteOperation(Bookmark);
