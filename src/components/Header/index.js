import React from 'react';

import { HeaderContainer } from './styles';

const Header = () => (
  <HeaderContainer>
    <h1>GoCommerce</h1>
    <a href="/">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
            &nbsp;Meu Carrinho
    </a>
  </HeaderContainer>
);

export default Header;
