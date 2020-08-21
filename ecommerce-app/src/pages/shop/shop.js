import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';

import CollectionPage from '../collection/collection';

// Route is automatically passing these three objects into component as props.
//  match, ...
const ShopPage = ({ match }) => {

    return (
        <div className="shop-container">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;