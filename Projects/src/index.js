import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// using global SASS files 
//import '../Shared/main.scss';
//import Home from './Portfolio/components/Home/home';

/* Youtube app
 import Home from './Youtube/components/Home';
*/

/* Photowall app 
 import Home from './Photowall/components/Home';
 Note: For Photowall app, make sure to wrap the Home within browser router
*/

// Songs app using Redux with React 
import Home from './Songs/components/Home';
// Provider object
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import reducers from './Songs/reducers/index';

  const App = () => {
  
      return(
        <Provider store={createStore(reducers)}>
          <Home />
        </Provider>
      )
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

