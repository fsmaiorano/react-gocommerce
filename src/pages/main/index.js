import React, { Fragment } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Main = () => (
  <Fragment>
    <Header />
    <Container>
      <h1>Main Page</h1>
    </Container>
  </Fragment>
);

export default Main;
