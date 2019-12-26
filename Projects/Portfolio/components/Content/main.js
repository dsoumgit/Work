import React, { Component } from 'react';
import './main.scss'; 
import AboutMe from './about/aboutMe'; 

class Main extends Component {

    render() {
        return(
            <main>
                <AboutMe />
            </main>
        )
    }
}

export default Main; 