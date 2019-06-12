import * as React from 'react';

const MAX_RATING = 5;

interface Props {
  ratingClass?: string,
  starsClass?: string,
  valueClass?: string,
  hasValue: boolean,
  rating: number,
}

const Rating = (props: Props) => {
  const {
    ratingClass,
    starsClass,
    valueClass,
    hasValue,
    rating,
  } = props;
  const ratingWidth = Math.round(rating) * 100 / MAX_RATING;

  return <div className={`rating ${ratingClass}`}>
    <div className={`rating__stars ${starsClass}`}>
      <span style={{width: `${ratingWidth}%`}}/>
      <span className="visually-hidden">Rating</span>
    </div>
    {hasValue ? <span className={`rating__value ${valueClass}`}>{Math.round(rating)}</span> : null}
  </div>;
};

export default Rating;
