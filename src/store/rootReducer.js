import {combineReducers} from 'redux';
import offers from './offers/reducer/reducer';
import favorites from './favorites/reducer/reducer';
import reviews from './reviews/reducer/reducer';
import city from './city/reducer/reducer';
import user from './user/reducer/reducer';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.CITY]: city,
  [NameSpace.USER]: user,
});
