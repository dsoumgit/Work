//import { SET_POSTS } from '../_reducers/postsReducer';

export const getPosts = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data => dispatch({ type: SET_POSTS, payload: data }))
            .catch(err => console.warn(err));
    }
}

export const getData = (data) => {
    return dispatch => {
        dispatch({ type: "STORE_SOMETHING", payload: data })
    }
}
/*
export const getData = (data) => {
    return dispatch => {
        dispatch({ type: "CSV_DATA", payload: data })
    }
}*/