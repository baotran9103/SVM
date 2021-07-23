import { combineReducers } from "redux";
import Utils from './Utils/Reducer'
import Account from './Account/Reducer'
export default combineReducers({
  Utils:Utils,
  Account:Account,
});
