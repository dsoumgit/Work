import axios from 'axios';

/*axios.get('https://api.spoonacular.com/food/products/search?query=pizza&apiKey=55cf7f78388841e6819bafcf40789c71')
    .then(response => {
        console.log(response);
    })*/

import Search from './models/Search';
// import all from searchView file 
import * as searchView from './views/searchView';
// DOM elements 
import { elements } from './views/base';

/**
 * Create a global state that allows to store all the data such as 
 *  current recipes, view carts, likes in one central place and one object.
 * In this case, we create one state to store all the data that allows to 
 *  access through out the controller.
 * Global state:
 *  - Search object
 *  - Current recipe 
 *  - Shopping list 
 *  - Liked recipes
 */
const state = {};

// a function to control the search
                // use async/await 
const controlSearch = async () => {
    // 1. get query 
    const query = searchView.getInput();
    // check if there is any query 
    if (query) {
        // 2. Store it in a state
        state.search = new Search(query);  
        // clear the search 
        searchView.clearInput();
        // clear list item 
        searchView.clearResults();
        // 3. maybe show busy indicator while requesting a new result

        // 4. wait till the result is done 
        await state.search.getResults();
        // 5. render the result on UI
        searchView.renderList(state.search.result);
    }
}

// add event listener for submit button         // callback 
elements.searchForm.addEventListener('submit', evt => {
    // prevent browser refresh 
    evt.preventDefault();

    // call function 
    controlSearch(); 
});

 
 //search.getResults(); 