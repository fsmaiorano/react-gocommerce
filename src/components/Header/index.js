import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { HeaderContainer } from './styles';

const Header = ({ cart }) => (
  <HeaderContainer>
    <h1>GoCommerce</h1>
    <Link to="/carrinho">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
            &nbsp;Meu Carrinho&nbsp;(
      {cart.quantity}
)
    </Link>
  </HeaderContainer>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
