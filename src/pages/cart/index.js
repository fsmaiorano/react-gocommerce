import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Table, TableHeader, TableRow, TableData,
} from './styles';

class Cart extends Component {
    state = {
      cartItems: null,
    };

    componentDidMount() {
      const { cart } = this.props;
      if (cart) {
        this.setState({ cartItems: cart.data });
      }
    }

    removeItem = (item) => {};

    render() {
      const { cartItems } = this.state;
      return (
        <Container>
          {!!cartItems && cartItems.length > 0 ? (
            <Table>
              <TableRow>
                <TableHeader />
                <TableHeader>PRODUTO</TableHeader>
                <TableHeader>VALOR</TableHeader>
                <TableHeader>QTD</TableHeader>
                <TableHeader>SUBTOTAL</TableHeader>
              </TableRow>
              {cartItems.map(item => (
                <TableRow>
                  <Fragment>
                    <TableData image>
                      <img src={item.image} alt="product" />
                    </TableData>
                    <TableData>
                      <p>{item.name}</p>
                      <p><small>{item.brand}</small></p>
                    </TableData>
                    <TableData>
                                        R$&nbsp;
                      {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </TableData>
                    <TableData>{item.quantity}</TableData>
                    <TableData>
                                        R$&nbsp;
                      {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </TableData>
                  </Fragment>
                </TableRow>
              ))}
            </Table>
          ) : (
            <p>O carrinho está vazio!</p>
          )}
        </Container>
      );
    }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
