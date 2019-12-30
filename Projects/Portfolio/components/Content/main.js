import React, { Component } from 'react';
import './main.scss'; 
import AboutMe from './about/aboutMe';
import Work from './work/work';

class Main extends Component {

    render() {
        return(
            <main>
                <AboutMe />
                <Work />
            </main>
        )
    }
}

export default Main; 