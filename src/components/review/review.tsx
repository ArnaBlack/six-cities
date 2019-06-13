import * as React from 'react';
import {format} from 'date-fns';

import Rating from '../rating/rating';

import {Comment} from '../../types';

const Review = (props: Comment) => {
  const {
    user,
    rating,
    comment,
    date,
  } = props;
  const {
    avatarUrl,
    name,
  } = user;
  const dateTime = format(date, `YYYY-MM-DD`);
  const formattedDate = format(date, `MMM YYYY`);

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className={`reviews__avatar-wrapper user__avatar-wrapper`}>
        <img
          className="reviews__avatar user__avatar"
          src={`${avatarUrl}`}
          width="54"
          height="54"
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">
        {name}
      </span>
    </div>
    <div className="reviews__info">
      <Rating
        ratingClass="reviews__rating"
        starsClass="reviews__stars"
        hasValue={false}
        rating={rating}
      />
      <p className="reviews__text">
        {comment}
      </p>
      <time
        className="reviews__time"
        dateTime={dateTime}
      >
        {formattedDate}
      </time>
    </div>
  </li>;
};

export default Review;
