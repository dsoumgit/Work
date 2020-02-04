import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}
