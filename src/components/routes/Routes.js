import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNotFound from 'components/page/PageNotFound';
import Home from 'scenes/home/Home';
import About from 'scenes/about/About';
import Topics from 'scenes/topics/Topics';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
