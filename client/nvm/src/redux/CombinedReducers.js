import { combineReducers } from "redux";
import Utils from './utils/Reducer'
import Account from './Account/Reducer'
export default combineReducers({
  Utils:Utils,
  Account:Account,
});
