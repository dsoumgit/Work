import React from 'react';
import './collection.style.scss'; 

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';

import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ match, collection }) => {
    console.log(collection);
    const { title, items } = collection; 

    return(
        <div className="collection-page">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
            </div>
        </div>
    )
}
    
// using the second argument to access the params 
const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return{
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
} 

export default connect(mapStateToProps)(CollectionPage);