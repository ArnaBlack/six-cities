import * as React from 'react';

import {MAX_RATING} from '../../constants';

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
  const ratingValue = hasValue
    ? <span className={`rating__value ${valueClass}`}>{Math.round(rating)}</span>
    : null;

  return <div className={`rating ${ratingClass}`}>
    <div className={`rating__stars ${starsClass}`}>
      <span style={{width: `${ratingWidth}%`}}/>
      <span className="visually-hidden">Rating</span>
    </div>
    {ratingValue}
  </div>;
};

export default Rating;
