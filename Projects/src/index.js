import React from 'react'; 
import ReactDOM from 'react-dom';
// using global SASS files 
//import '../Shared/main.scss';
//import Home from './Portfolio/components/Home/home';


// Youtube app
//import Home from './Youtube/components/Home';


/* Photowall app 
import { BrowserRouter } from 'react-router-dom'; 
import Home from './Photowall/components/Home';
// Note: For Photowall app, make sure to wrap the Home within browser router
*/

/* 'Songs' app using Redux with React 
import Home from './Songs/components/Home';
// Provider object
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import reducers from './Songs/reducers/index'; 
<Provider store={createStore(reducers)}>
    <Home />
</Provider>
*/
    


// 'Blog' app with Redux 
import Home from './Blog/components/Home';
import { Provider } from 'react-redux'; 
                    // needs this to connect with store 
import { createStore, applyMiddleware } from 'redux'; 
// hook react-thunk middleware with Store 
import thunk from 'redux-thunk'; 
import reducers from './Blog/reducers/reducers'; 


const App = () => {
    // store 
    const store = createStore(reducers, applyMiddleware(thunk));

    return(    
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

