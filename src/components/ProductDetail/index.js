import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    return <h1>{product.name}</h1>;
  }
}

export default ProductDetail;
