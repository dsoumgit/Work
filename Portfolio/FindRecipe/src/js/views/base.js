/**
 * This base class stores the references to DOM elements and functions that can be reused
 *  through out the application.
 * 
 */
// Store all the DOM elements in one object so it is easy to reference it anywhere 
export const elements = {
    searchForm: document.querySelector('.search'), 
    searchInput: document.querySelector('.search__field'),
    searchResults: document.querySelector('.results'),
    searchResultList: document.querySelector('.results__list'),
    resultsPage: document.querySelector('.results__pages'),
    resPrevPage: document.querySelector('.results__btn--prev'),
    resNextPage: document.querySelector('.results__btn--next')
}

// create a variable loader so we it is easy to be reusable 
const loaderElem = {
    loader: 'loader'
}

// show the loader     // 'parent' refers to the parent element 
export const renderLoader = parent => {
    // loader class from CSS 
    const loader = `
            <div class='${loaderElem.loader}'>
                <svg>
                    <use href='img/icons.svg#icon-cw'></use>
                </svg>
            </div>
        `;

    // insert to the parent 
    parent.insertAdjacentHTML('afterbegin', loader);
}

// clear the loader 
export const clearLoader = () => {
    // get loader class
    const loader = document.querySelector(`.${loaderElem.loader}`); 
    // move up to the parent element then remove the child
    if (loader) loader.parentElement.removeChild(loader); 
}