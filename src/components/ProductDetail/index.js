import React, { Component } from 'react';

import { Container } from './styles';

class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    return (
      <Container>
        <img src={product.image} alt="product" />
        <p className="product-name">{product.name}</p>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">
                    R$&nbsp;
          {product.price}
        </p>
      </Container>
    );
  }
}

export default ProductDetail;
