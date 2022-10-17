import {configureStore, applyMiddleware} from "@reduxjs/toolkit";
import {createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from "history";
import createSagaMiddleware from "redux-saga";

import connector, {Props} from "./connector";
import reducers from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const {createReduxHistory, routerMiddleware, routerReducer} =
  createReduxHistoryContext({history: createBrowserHistory()});

const reducer = reducers(routerReducer);
const middleware = [routerMiddleware];
const enhancers = [applyMiddleware(sagaMiddleware)];

const store = configureStore({
  reducer,
  enhancers,
  middleware,
  // devTools: true,
});

const history = createReduxHistory(store);

sagaMiddleware.run(saga);

export {connector, history};
export type {Props};
export default store;
