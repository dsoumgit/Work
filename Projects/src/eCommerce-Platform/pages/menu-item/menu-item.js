import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => {

    return (
        <div className={`${size} menu-item`}>
            {/* we do not want to see the image bigger, just want to see the effect on hover. */ }
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;