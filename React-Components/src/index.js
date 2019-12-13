import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

//import Hero from '../components/Hero/hero';
import FourCard from '../components/Four-card-section/fourCard';

class App extends Component {
    render() {
        return(
            <FourCard />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)