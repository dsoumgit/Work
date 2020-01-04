import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'; 
//import Home from './components/Home/home';
import Nav from '../Navigation/header';
import About from '../About/aboutMe';
import Portfolio from '../Work/work';
import Contact from '../Contact/contact'; 

const Home = () => {

    return(
        <div>
            <Nav />
            <About />
            <Portfolio />
            <Contact />
        </div>
        
    )
}

export default Home; 