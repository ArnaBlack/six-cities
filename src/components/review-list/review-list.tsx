import * as React from 'react';
import {connect} from 'react-redux';

import Review from '../review/review';

import {loadReviews} from '../../store/reviews/operation/operation';
import {getReviews} from '../../store/reviews/selectors';

import {Comment} from '../../types';

interface Props {
  reviews: Comment[],
}

const ReviewList = (props: Props) => {
  const {reviews} = props;

  return <ul className="reviews__list">
    {reviews.map((it) => <Review
      key={`review-${it.id}`}
      {...it}
    />)}
  </ul>;
};

const mapStateToProps = (state, props) => ({
  ...props,
  reviews: getReviews(state),
});

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);
