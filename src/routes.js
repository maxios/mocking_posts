import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './containers/home';
import Post from './containers/post';

export default function Routes() {
  return (
    <Router>
      <Route path="/post/:post_id" component={Post}/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
