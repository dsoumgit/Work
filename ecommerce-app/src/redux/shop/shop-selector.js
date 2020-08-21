import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
    [selectShopCollections],    
    collections => Object.keys(collections).map(key => collections[key])    // convert to an array  
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollections],
        //collections => collections.find(collection => collection.routeName === collectionUrlParam)
        collections => collections[collectionUrlParam]
    )