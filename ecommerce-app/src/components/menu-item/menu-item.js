import React from 'react';
import './menu-item.scss';
// HOC (withRouter) 
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

    return (
        <div className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`) }
            >
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

export default withRouter(MenuItem);

/**
 * Note: withRouter is a High Order Component which is a function that takes a component 
 *  as an argument and returns a modified component with the access to history and match.
 */