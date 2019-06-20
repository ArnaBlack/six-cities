import * as React from 'react';
import {connect} from 'react-redux';

import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

import ReviewsOperation from '../../store/reviews/operation/operation';

import {
  getLoadingState,
  getReviews,
} from '../../store/reviews/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

import {Comment} from '../../types';

interface Props {
  isLoading: boolean,
  isAuthorizationRequired: boolean,
  placeId: number,
  reviews: Comment[],
  loadReviews: (id: number) => void,
}

class Reviews extends React.PureComponent<Props, null> {
  render() {
    const {
      isLoading,
      reviews,
      placeId,
      isAuthorizationRequired,
    } = this.props;

    return isLoading ? null : <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList />
      {isAuthorizationRequired ? null : <ReviewForm id={placeId} />}
    </section>;
  }

  componentDidMount() {
    const {
      loadReviews,
      placeId,
    } = this.props;

    loadReviews(placeId);
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  isLoading: getLoadingState(state),
  isAuthorizationRequired: getAuthorizationStatus(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => dispatch(ReviewsOperation.loadReviews(id))
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
