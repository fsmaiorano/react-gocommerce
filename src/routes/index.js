import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Category from '../pages/category';
import Detail from '../pages/detail';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/categoria/:id" component={Category} />
    <Route path="/produto/:id" component={Detail} />
    <Route path="/carrinho" component={Cart} />
  </Switch>
);

export default Routes;
