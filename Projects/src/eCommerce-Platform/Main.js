import React, { Component } from 'react';
import './Main.style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
// authentication 
import { auth } from './firebase/firebase.util';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            console.log(user);
            this.setState({
                currentUser: user
            })
        })
    }
    
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <Header user={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignOutPage} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default Main;