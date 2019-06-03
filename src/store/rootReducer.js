import {combineReducers} from 'redux';
import data from './data/reducer/reducer';
import app from './app/reducer/reducer';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
});
