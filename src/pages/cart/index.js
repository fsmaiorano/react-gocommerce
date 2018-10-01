import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Table, TableHeader, TableRow, TableData,
} from './styles';

class Cart extends Component {

    removeItem = (item) => {
      const { deleteCart } = this.props;
      deleteCart(item);
    };

    render() {
    const { cart } = this.props;
      return (
        <Container>
          {!!cart && cart.data.length > 0 ? (
            <Table>
              <TableRow>
                <TableHeader />
                <TableHeader>PRODUTO</TableHeader>
                <TableHeader>VALOR</TableHeader>
                <TableHeader>QTD</TableHeader>
                <TableHeader>SUBTOTAL</TableHeader>
                <TableHeader />
              </TableRow>
              {cart.data.map(item => (
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
                    <TableData>
                      <i className="fa fa-close" aria-hidden="true" onClick={() => this.removeItem(item)} />
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

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
