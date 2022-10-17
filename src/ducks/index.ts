import {configureStore, applyMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

// const reducer = reducers();
const enhancers = [applyMiddleware(sagaMiddleware)];

const store = configureStore({
  reducer: [],
  enhancers,
  devTools: true,
});

sagaMiddleware.run(saga);

export default store;
