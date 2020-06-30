/* Actions are just Javascript objects. 
 *  All the actions in the app are here. These functions are known 
 *      as action creators.
 */

// tells which index to remove the post 
export function removePost(index) {
    // what type 
    return {
        type: 'REMOVE_POST',
        // pass proper data to remove 
        // use es6 syntax because of key and value are the same 
        index: index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post    // use es6 syntax because of key and value are the same 
    }
}

