import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './containers/home';
import Post from './containers/post';
import UpdatePost from './containers/update_post';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/post/:post_id" component={Post}/>
      <Route exact path="/post/:post_id/update" component={UpdatePost}/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
