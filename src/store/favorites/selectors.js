import NameSpace from '../name-space';

export const getLoadingState = (state) => state[NameSpace.FAVORITES].isLoading;
export const getFavorites = (state) => state[NameSpace.FAVORITES].favorites.reduce((obj, curr) => {
  const {name} = curr.city;

  if (!obj[name]) {
    obj[name] = [];
  }

  return {
    ...obj,
    [name]: [...obj[name], curr],
  };
}, {});
