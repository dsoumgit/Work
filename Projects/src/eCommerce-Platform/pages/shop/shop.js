import React, { Component } from 'react';
import './shop.style.scss';
import SHOP_DATA from './shop_data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {

        // destructing 
        const { collections } = this.state; 

        return(
            <div className="shop-container">
                {
                    collections.map(({ id, ...collectionProps }) => (
                        <CollectionPreview key={id} {...collectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;