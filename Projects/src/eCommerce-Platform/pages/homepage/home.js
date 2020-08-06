import React from 'react';
import './home.style';
import Header from '../../components/header/header';
import Directory from '../../components/directory/directory';

const Homepage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default Homepage;