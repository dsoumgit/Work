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

const renderRecipe = recipe => {
    // use template string to return each item 
    const markup = `
            <li>
                <a class="results__link results__link--active" href="#${recipe.id}">
                    <figure class="results__fig">
                        <img src="${recipe.image}" alt="Test">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${recipe.title}</h4>
                        <p class="results__author">Item #: ${recipe.id}</p>
                    </div>
                </a>
            </li>
        `;

    // insert to the list item 
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);     
}
// create a method to for the results 
export const renderList = recipes => {
    // pass each object to the function 
    recipes.products.forEach(renderRecipe);
}