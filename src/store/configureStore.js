import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
const middleware = applyMiddleware();

const store = createStore(rootReducer, middleware);

export default store;
