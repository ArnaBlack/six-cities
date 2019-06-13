import {SortingTypes} from '../../constants';

export const adaptOfferData = (data) => {
  const offer = {
    ...data,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    maxAdults: data.max_adults,
    previewImage: data.preview_image,
    host: {
      ...data.host,
      avatarUrl: data.host.avatar_url,
      isPro: data.host.is_pro,
    }
  };

  delete offer.is_favorite;
  delete offer.is_premium;
  delete offer.max_adults;
  delete offer.preview_image;
  delete offer.host.avatar_url;
  delete offer.host.is_pro;

  return offer;
};

export const adaptReviewData = (data) => {
  const review = {
    ...data,
    user: {
      ...data.user,
      avatarUrl: data.user.avatar_url,
      isPro: data.user.is_pro,
    }
  };

  delete review.user.avatar_url;
  delete review.user.is_pro;

  return review;
};

export const makeSortFunction = (type) => (a, b) => {
  switch (type) {
    case SortingTypes.LOW_TO_HIGH:
      return a.price - b.price;
    case SortingTypes.HIGH_TO_LOW:
      return b.price - a.price;
    case SortingTypes.TOP_RATED:
      return b.rating - a.rating;
    case SortingTypes.POPULAR:
    default:
      return true;
  }
};
