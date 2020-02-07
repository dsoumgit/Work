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
    

/*
// 'Blog' app with Redux 
import Home from './Blog/components/Home';
import { Provider } from 'react-redux'; 
                    // needs this to connect with store 
import { createStore, applyMiddleware } from 'redux'; 
// hook react-thunk middleware with Store 
import thunk from 'redux-thunk'; 
import reducers from './Blog/reducers/reducers'; 
// store 
    const store = createStore(reducers, applyMiddleware(thunk));
<Provider store={store}>
            <Home />
        </Provider>
*/        

// oVo Sustainment 
import Main from './Lighthouse-Sustain/components/Main';

const App = () => {

    return(
        <Main />
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)


//import { BrowserRouter as Router, Route, Link, Switch }  from 'react-router-dom'; 
//import Consumption from './Lighthouse-Sustain/components/Consumption/consumption';

/*
const topics = [
    {
        name: 'Request Tickets',
        id: 'request',
        description: 'Loream description...',
        resources: [
            {
                name: 'URL Parameter',
                id: 'url-parameters',
                description: 'URL parameters are ...',
                url: 'http://www.google.com'
            },
            {
                name: 'React is the best',
                id: 'react',
                description: 'When there is ...',
                url: 'http://www.google.com'
            }
        ]
    },
    {
        name: 'Point Consumption',
        id: 'point-consumption',
        description: 'Loream description...',
        resources: [
            {
                name: 'URL Parameter',
                id: 'url-parameters',
                description: 'URL parameters are ...',
                url: 'http://www.google.com'
            },
            {
                name: 'React is the best',
                id: 'react',
                description: 'When there is ...',
                url: 'http://www.google.com'
            }
        ]
    }

];
*/
