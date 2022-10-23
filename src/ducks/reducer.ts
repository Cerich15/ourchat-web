import {combineReducers, Reducer} from "redux";

const reducers = (router: Reducer) => {
  return combineReducers({
    router,
  });
};

export default reducers;
