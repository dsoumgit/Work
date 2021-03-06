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
// import Main from './Lighthouse-Sustain/components/Main';

// const App = () => {

//     return(
//         <Main />
//     )
// }

// Learn-Redux 
/*
import Home from './Learn-Redux/Home';
import allReducers from './Learn-Redux/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    return(
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
*/


// Monsters-Rolodex 
// import Main from './Monsters-Rolodex/Main';
// const App = () => {
//     return (
//         <Main />
//     )
// }

// Porfolio-App
// import Main from './Porfolio-App/components/Main';
// const App = () => {
//     return(
//         <Main />
//     )
// }


// eCommerce-Platform app
// import Main from './eCommerce-Platform/Main';
// import { Provider } from 'react-redux';
// // can be used for other platform like React native, etc.
// // this one is specifically for React 
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './eCommerce-Platform/redux/store';

// const App = () => {
//     return(
//         <Provider store={store}>
//             <PersistGate persistor={persistor}>
//                 <Main />
//             </PersistGate>
//         </Provider>
//     )
// }

//import App from './Tutorials/Context_API/App';

import App from './Learn-Redux/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Learn-Redux/reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


