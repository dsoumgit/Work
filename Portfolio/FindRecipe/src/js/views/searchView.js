/**
 * It returns the data for 
 */
import { elements } from './base';

                            // get input value 
export const getInput = () => elements.searchInput.value; 

// clear input field 
export const clearInput = () => {
    elements.searchInput.value = ''; 
};

// clear list results 
export const clearResults = () => {
    // list item 
    elements.searchResultList.innerHTML = ''; 
}

// this function is to limit the title, using default parameter in ES6  
const limitRecipeTitle = (title, limit = 17) => {
    const output = [];
    // check the title 
    if (title.length >= limit) {
        // split the string and use reduce to count each length 
        title.split('').reduce((acc, cur) => {
            // check if accumulate and current are less than or equal to limit 
            if (acc + cur.length <= limit) {
                // store each element a new array 
                output.push(cur);
            }   
            // return the acc and current length 
            return acc + cur.length;
        }, 0);

        // return the result and use join() to combine all elements and add dots after it 
        return `${output.join('')} ...`;  //output.join('') + '...';
    }

    // return title 
    return title; 
}

const renderRecipe = recipe => {
    // use template string to return each item 
    const markup = `
            <li>
                <a class="results__link results__link--active" href="#${recipe.id}">
                    <figure class="results__fig">
                        <img src="${recipe.image}" alt="Test">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                        <p class="results__author">Item #: ${recipe.id}</p>
                    </div>
                </a>
            </li>
        `;

    // insert to the list item 
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);       
}

// create a pagination 

// a method to show 10 results at a time  
export const renderList = (recipes, page = 1, resultPerPage = 10) => {
    // page 1 shows 10 items at a time
    const start = (page - 1) * resultPerPage; 
    // end 
    const end = page * resultPerPage;
    // pass each object to the function 
    recipes.products.slice(start, end).forEach(renderRecipe);
}


// create a function to show the result 10 items per page 
/*export const renderList = (recipes, page = 1, resultPerPage = 10) => {
    // start 
    const start = 1;
    // end 
    const end = resultPerPage; 

    // loop 
    for (let i = start; i < recipes.products.length; i++) {
        // check when i  is 10
        if (i <= end) {
            // 
            renderRecipe(recipes.products[i]); 
        }
    }

    // previous page  
    const prevPage = `
            <button class="btn-inline results__btn--prev">
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-left"></use>
                </svg>
                <span>Page ${start}</span>
            </button>
        `;

    const nextPage = `
        <button class="btn-inline results__btn--next">
            <span>Page 2</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
        </button>
        `;    

    // insert to the DOM 
    elements.resultsPage.insertAdjacentHTML('beforeend', prevPage);  
    // insert to the DOM 
    elements.resultsPage.insertAdjacentHTML('beforeend', nextPage);    
}

// get next page button
// const nextPage = elements.resNextPage; 
// console.log(nextPage);

// // check after element is completely loaded 
// if (nextPage) {
//     // add event listener 
//     nextPage.addEventListener('click', evt => {
//         console.log('next page');
//     });
// }

*/