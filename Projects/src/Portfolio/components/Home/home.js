import React from 'react'; 

// PAGES 
import Nav from '../Navigation/header';
import About from '../About/aboutMe';
import Portfolio from '../Work/work';
import Contact from '../Contact/contact'; 
import Disclaimer from '../Disclaimer/disclaimer';
import Footer from '../Footer/footer';

const Home = () => {

    return(
        <React.Fragment>
            <Nav />
            <About />
            <Portfolio /> 
            <Contact />
            <Disclaimer />
            <Footer />
        </React.Fragment>
        
    )
}

export default Home; 