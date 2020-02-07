import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
import Dashboard from './Dashboard/dashboard';
import NotFound from './pages/notfound';
import Request from './SustainmentRequest/request';
import Consumption from './Point-consumption/pointConsumption';

const CONTENT = {
  request: 'This is the first page',
  consumption: 'This is the second page'
}

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}
