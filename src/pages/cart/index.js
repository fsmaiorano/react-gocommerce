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
          <Table>
            <TableRow>
              <TableHeader>PRODUTO</TableHeader>
              <TableHeader>VALOR</TableHeader>
              <TableHeader>QTD</TableHeader>
              <TableHeader>SUBTOTAL</TableHeader>
            </TableRow>
            <TableRow>
              {!!cartItems && cartItems.length > 0
                ? cartItems.map(item => (
                  <Fragment>
                    <TableData>{item.name}</TableData>
                    <TableData>data2</TableData>
                    <TableData>data3</TableData>
                    <TableData>data4</TableData>
                  </Fragment>
                ))
                : null}
            </TableRow>
          </Table>
        </Container>
      );
    }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
