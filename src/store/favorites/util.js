export const updateFavorites = (offers, offer) => offers.filter((it) => it.id !== offer.id);
