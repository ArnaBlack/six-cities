import NameSpace from '../name-space';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].isAuthorizationRequired;
export const getUser = (state) => state[NameSpace.USER].user;
