import React from 'react';
import './category.style.scss'; 

import CollectionItem from '../../components/collection-item/collection-item';

const CategoryPage = ({ match }) => {
    console.log(match);
    return(
        <div className="category-page">
            <h1>Category Page</h1>
        </div>
    )
}
    
export default CategoryPage;