import {SortingTypes} from '../../constants';

export const adaptOfferData = (data) => ({
  bedrooms: data.bedrooms,
  city: data.city,
  description: data.description,
  goods: data.goods,
  host: {
    avatarUrl: data.host.avatar_url,
    id: data.host.id,
    isPro: data.host.is_pro,
    name: data.host.name,
  },
  id: data.id,
  images: data.images,
  isFavorite: data.is_favorite,
  isPremium: data.is_premium,
  location: data.location,
  maxAdults: data.max_adults,
  previewImage: data.preview_image,
  price: data.price,
  rating: data.rating,
  title: data.title,
  type: data.type,
});

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

export const updateOffers = (offers, offer) => offers.map((it) => it.id === offer.id ? offer : it);
