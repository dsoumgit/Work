/**
 * This file contains all the reducers.
 */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// tells redux persist to use local storage 
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user-reducer';
import cartReducer from '../redux/cart/cart-reducer';
import directoryReducer from '../redux/directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

// define a new config...it is just an object  
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // it is the array that contains the string name of any of the reducers that we want to store. (ex. cart, user)
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);