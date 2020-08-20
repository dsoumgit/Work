import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignOutPage />} />
        </Switch> 
      </BrowserRouter>
    )
  }
}

export default App;
