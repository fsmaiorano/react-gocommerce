import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Category from '../pages/category';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/categoria/:id" component={Category} />
  </Switch>
);

export default Routes;
