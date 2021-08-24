import combineRedducers from "./CombinedReducers";
import { createStore } from "redux";
const store = createStore(
  combineRedducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
