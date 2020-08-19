import React, { Component } from 'react';
import './Main.style.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
// authentication 
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user-action';
// redux 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';


class Main extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         currentUser: null
    //     }
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {     
        // destructing the props 
        const { setCurrentUser } = this.props;
        
                                                // async
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // check
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                
                userRef.onSnapshot(snapShot => {
                    // this.setState({
                    //     currentUser: {
                    //         id: snapShot.id,
                    //         ...snapShot.data()
                    //     }
                    // })

                    // redux 
                    setCurrentUser({
                        id: snapShot.id, 
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }
    
    componentWillUnmount() {
     //   this.unsubscribeFromAuth();
    }

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

            // destructing current user from reducer 
// const mapStateToProps = ({ user }) => {
//     return {
//         currentUser: user.currentUser
//     }
// }

// using 'reselect' 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

// dispatch event handler 
const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);