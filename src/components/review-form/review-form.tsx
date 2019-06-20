import * as React from 'react';
import {connect} from 'react-redux';

import withFormData from '../../hocs/with-formdata/with-formdata';

import ReviewsOperation from '../../store/reviews/operation/operation';
import {
  getSendingState,
  getSendingError,
  getReviews,
} from '../../store/reviews/selectors';

import {
  MAX_RATING,
  Review,
} from '../../constants';

interface Props {
  isSending: boolean,
  sendingError: string | null,
  id: number,
  disabled: boolean,
  formData: Review,
  onSendForm: (Review) => void,
  onSubmit: () => void,
  onChange: (evt: any) => void,
}

interface Review {
  id?: number,
  rating: number,
  comment: string,
}

class ReviewForm extends React.PureComponent<Props, null> {
  private _formRef: React.RefObject<HTMLFormElement>;

  constructor(props) {
    super(props);

    this._formRef = React.createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {
      isSending,
      sendingError,
      disabled,
      onChange,
    } = this.props;

    return <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={this._handleFormSubmit}
      onChange={onChange}
      ref={this._formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[...new Array(MAX_RATING)].reduceRight((arr, curr, i) => {
          const index = i + 1;
          const star = <React.Fragment key={`star-${index}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={index}
              id={`${index}-stars`}
              type="radio"
              required
            />
            <label
              htmlFor={`${index}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>;

          return [...arr, star];
        }, [])}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={Review.MIN_LENGTH}
        maxLength={Review.MAX_LENGTH}
        required
      />
      {sendingError ? <p style={{color: `red`, margin: 0}}>{sendingError}</p> : null}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">{Review.MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={disabled || isSending}
        >
          Submit
        </button>
      </div>
    </form>;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {
      id,
      formData,
      onSendForm,
      onSubmit,
    } = this.props;

    onSendForm({id, ...formData});
    onSubmit();
    this._formRef.current.reset();
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  isSending: getSendingState(state),
  sendingError: getSendingError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendForm: ({id, rating, comment}) => dispatch(ReviewsOperation.sendReview({id, rating, comment})),
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(withFormData(ReviewForm));
