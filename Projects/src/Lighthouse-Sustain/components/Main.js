import React, { Component } from 'react';
//import './main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './_reducers';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const Home = () => {

    return(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}

export default Home; 