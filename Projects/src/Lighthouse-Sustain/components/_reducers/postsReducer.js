//import initialState from './initialState';

export const SET_POSTS = 'POSTS/SET_POSTS';

export default (state = [], action) => {
    switch(action.type) {
        case SET_POSTS: 
            return action.payload;
       // case CSV_DATA:
       //     return action.payload;
        default:
            return state;
    }
}