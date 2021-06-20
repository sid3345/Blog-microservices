import React from 'react';
import PostCreate from './PostCreate'
import PostList from './PostList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => {

  return (
    <Router>
      <Switch>
        <Route path="/blog/new" component={PostCreate} />
        <Route path="/" component={PostList} />
      </Switch>
    </Router>
  );
};