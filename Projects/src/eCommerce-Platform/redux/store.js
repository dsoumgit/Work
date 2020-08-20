                        // middleware is between the action and reducer 
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';    // this library allows the browser to cache the store 
import logger from 'redux-logger';

import rootReducer from './root-reducers';

const middlewares = [logger];

// need to export 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };