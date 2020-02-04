import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
//import Posts from "./pages/Posts";
import Main from './Main/main';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}
