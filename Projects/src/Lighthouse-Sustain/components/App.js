import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
//import Posts from "./pages/Posts";
import Dashboard from './Main/dashboard';
import Request from './Request/request';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/request" component={Request} />
      </Switch>
    </div>
  );
}
