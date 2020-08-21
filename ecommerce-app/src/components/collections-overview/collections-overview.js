import React from 'react';
import './collections-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux/shop/shop-selector';

const CollectionsPreview = ({ collections }) => {
    console.log(collections);
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionsPreview);