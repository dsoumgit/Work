import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
// using global SASS files 
import '../Shared/main.scss';

import Home from '../Portfolio/Home';

class App extends Component {
    render() {
        return(
            <Home />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

