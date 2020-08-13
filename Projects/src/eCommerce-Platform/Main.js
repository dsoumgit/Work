import React, { Component } from 'react';
import './Main.style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop/shop';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
// authentication 
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user-action';
// redux 
import { connect } from 'react-redux';

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
        this.unsubscribeFromAuth();
    }

    render() {
        return (
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
}

// connect react to the redux 
const mapStateToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapStateToProps)(Main);