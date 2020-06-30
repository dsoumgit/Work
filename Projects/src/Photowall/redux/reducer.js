/* Note: reducer is just a function that accepts two arguments: state and action 
 *      - state must be and always return by a reducer and is going to live in a store 
 *      - action when dispatch it describes some events occur in the app. The purpose 
 *          of some events is to change the state .
 * 
 */ 

import posts from '../data/posts';

const postReducer = (state = posts, action) => {
    /* Note: the reducer is read only and never use setState to update the state
     */
    switch (action.type) {
        case 'REMOVE_POST': 
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]; 
        case 'ADD_POST':
            return [...state, action.post]; 
        default: 
            return state;
    }
}

export default postReducer;