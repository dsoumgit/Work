import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {

    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((elem, ind) => ind < 4)
                        .map(({ id, ...itemProps }) => (
                            <CollectionItem key={id} {...itemProps} />
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;