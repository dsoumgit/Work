import React from 'react';
import './Main.style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';

const Main = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main;