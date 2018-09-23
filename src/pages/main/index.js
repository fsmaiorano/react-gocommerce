import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Categories from '../../components/Categories';

import { Container } from './styles';

const Main = () => (
  <Fragment>
    <Header />
    <Categories />
    <Container>
      <h1>Main Page</h1>
    </Container>
  </Fragment>
);

export default Main;
