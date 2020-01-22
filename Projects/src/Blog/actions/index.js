import jsonPlaceholder from '../apis/jsonPlaceholder'; 
// import Lodash 
import _ from 'lodash'; 

// Method 1
                                // redux-thunk returns as a function
/*export const fetchPosts = () => async dispatch =>  {

    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response }); 
    
}; */

// Method 2 
export const fetchPosts = () => {
            // return function 
    return async dispatch => {
        
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
}

// fetch a user with memoize 
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
                    // using memoize method from Lodash to make each http request only one time with the same id 
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({ type: 'FETCH_USER', payload: response.data });
}); 