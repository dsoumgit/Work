import React from 'react'; 
import ReactDOM from 'react-dom';
// using global SASS files 
//import '../Shared/main.scss';
//import Home from './Portfolio/components/Home/home';


// Youtube app
//import Home from './Youtube/components/Home';


/* Photowall app */ 
import { BrowserRouter as Router } from 'react-router-dom'; 
//import Main from './Photowall/components/Main';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import rootReducer from './Photowall/redux/reducer';
import App from './Photowall/components/App';
// create a store 
const store = createStore(rootReducer);
// Note: For Photowall app, make sure to wrap the Home within browser router
const Home = () => {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}

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
// import Main from './Lighthouse-Sustain/components/Main';

// const App = () => {

//     return(
//         <Main />
//     )
// }


ReactDOM.render(
    <Home />,
    document.getElementById('root')
)


