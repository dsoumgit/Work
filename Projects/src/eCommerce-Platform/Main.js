import React from 'react';
import './Main.style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';

const Main = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignOutPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main;