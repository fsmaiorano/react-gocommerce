import React, { Component } from 'react';

import { Container } from './styles';

class ProductDetail extends Component {
    addItemToCart = (product) => {
      console.log(product);
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

export default ProductDetail;
