import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
import Dashboard from './Dashboard/dashboard';
import NotFound from './pages/notfound';
import Request from './SustainmentRequest/request';
import Consumption from './Consumption/consumption';

const CONTENT = {
  request: 'This is the first page',
  consumption: 'This is the second page'
}

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard/:consumption" component={Consumption} />
        <Route exact path="/dashboard/:request" component={Request} />
        <Route exact path="/dashboard" render={() => <Dashboard content={CONTENT} />} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}
