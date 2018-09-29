import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Container } from './styles';

class ProductDetail extends Component {
    addItemToCart = (product) => {
      const { addCart } = this.props;
      addCart(product);
    };

    render() {
      const { product } = this.props;
      return (
        <Container>
          <div>
            <img src={product.image} alt="product" />
          </div>
          <div>
            <p className="product-name">{product.name}</p>
            <p className="product-brand">{product.brand}</p>
            <p className="product-price">
                        R$&nbsp;
              {product.price}
            </p>
            <button onClick={() => this.addItemToCart(product)} type="button">
                        Adicionar ao Carrinho
            </button>
          </div>
        </Container>
      );
    }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const dispathStateToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  dispathStateToProps,
)(ProductDetail);
