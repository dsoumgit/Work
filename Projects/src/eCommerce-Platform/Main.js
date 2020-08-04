import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/home-page';
import HatsPage from './pages/hats/hat-page';

const Main = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main;