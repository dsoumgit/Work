import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AddPhoto from './Photowall/components/AddPhoto';
// using global SASS files 
//import '../Shared/main.scss';
//import Home from './Portfolio/components/Home/home';

// Youtube app
//import Home from './Youtube/components/Home';
// Photowall app 
import Home from './Photowall/components/Home';
// Note: For Photowall app, make sure to wrap the Home within browser router

  const App = () => {
  
      return(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
      )
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

