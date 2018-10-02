import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Table, TableHeader, TableRow, TableData, Feedback, Total,
} from './styles';

class Cart extends Component {
    static propTypes = {
      addCart: PropTypes.func.isRequired,
      deleteCart: PropTypes.func.isRequired,
      cart: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            price: PropTypes.number,
            name: PropTypes.string,
            brand: PropTypes.string,
            image: PropTypes.string,
          }),
        ),
      }).isRequired,
    };

    removeItem = (item) => {
      const { deleteCart } = this.props;
      deleteCart(item);
    };

    updateQuantity = (item, event) => {
      const { value } = event.target;
      const { addCart } = this.props;

      addCart(item, parseInt(value, 0));
    };

    render() {
      const { cart } = this.props;
      return (
        <Container>
          {!!cart && cart.data.length > 0 ? (
            <Fragment>
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
                  <TableRow key={item.id}>
                    <Fragment>
                      <TableData image>
                        <img src={item.image} alt="product" />
                      </TableData>
                      <TableData>
                        <p>{item.name}</p>
                        <p>
                          <small>{item.brand}</small>
                        </p>
                      </TableData>
                      <TableData price>
                                            R$&nbsp;
                        {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </TableData>
                      <TableData>
                        <input value={item.quantity} onChange={$event => this.updateQuantity(item, $event)} />
                      </TableData>
                      <TableData price>
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
              <Total>
                <p>
                                TOTAL R$&nbsp;
                  {cart.total.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
              </Total>
            </Fragment>
          ) : (
            <Feedback>
              <p>
                            O carrinho está vazio&nbsp;&nbsp;
                <i className="fa fa-meh-o" aria-hidden="true" />
              </p>
            </Feedback>
          )}
        </Container>
      );
    }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
