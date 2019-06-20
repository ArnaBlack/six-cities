import NameSpace from '../name-space';
import {MAX_REVIEWS} from '../../constants';

export const getLoadingState = (state) => state[NameSpace.REVIEWS].isLoading;
export const getSendingState = (state) => state[NameSpace.REVIEWS].isSending;
export const getSendingError = (state) => state[NameSpace.REVIEWS].sendingError;
export const getReviews = (state) => state[NameSpace.REVIEWS].reviews
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, MAX_REVIEWS);
