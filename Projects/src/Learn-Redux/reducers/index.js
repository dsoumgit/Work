// combine all reducers 
import counterReducer from './counterReducer'; 
import loggedReducer from './loggedReducer'; 
import { combineReducers } from 'redux'; 

const allReducers = combineReducers({
    counter: counterReducer, 
    logged: loggedReducer
}); 

export default allReducers; 