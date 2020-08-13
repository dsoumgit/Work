/**
 * This file contains all the reducers.
 */
import { combineReducers } from 'redux';
import userReducer from '../redux/user/user-reducer';

export default combineReducers({
    user: userReducer
});