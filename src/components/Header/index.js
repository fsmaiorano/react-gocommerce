import React from 'react';

import { connect } from 'react-redux';

import { HeaderContainer } from './styles';

const Header = ({ cart }) => (
  <HeaderContainer>
    <h1>GoCommerce</h1>
    <a href="/">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
            &nbsp;Meu Carrinho&nbsp;(
      {cart.data.length}
)
    </a>
  </HeaderContainer>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
