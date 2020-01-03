import React, { Component } from 'react';
import './main.scss'; 
import AboutMe from './about/aboutMe';
import Work from './work/work';
import Contact from './contact/contact';

class Main extends Component {

    render() {
        return(
            <main>
                <AboutMe />
                <Work />
                <Contact />
            </main>
        )
    }
}

export default Main; 