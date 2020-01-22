export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER': 
            return [...state, action.payload];  // add new array to existing array 
        default: 
            return state;  
    }
};