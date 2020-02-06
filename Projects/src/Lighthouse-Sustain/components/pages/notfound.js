import React from 'react';
import { Link } from 'react-router-dom'
import './notfound.css';

const NotFound = () => {

    return(
        <div className="not-found">
            <div className="not-img">
                <h1>
                    404
                    <span className="">Page Not Found</span>
                </h1>
            </div>
            
            <button type="button" className="home-btn">
                <Link to="/" className="home-btn-link">Home Page</Link>
            </button>
            
        </div>
    )
}

export default NotFound;