import {combineReducers} from 'redux';
import data from './data/reducer/reducer';
import user from './user/reducer/reducer';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
