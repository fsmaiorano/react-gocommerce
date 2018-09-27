import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Product } from './styles';

class Products extends Component {
    static propTypes = {
      products: PropTypes.shape({
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

    productDetail = (product) => {
      alert('a');
    };

    render() {
      const { products } = this.props;
      return (
        <Container>
          {!!products.data
                    && products.data.map(product => (
                      <Product key={product.id} onClick={() => this.productDetail(product)}>
                        <img src={product.image} alt={product.name} />
                        <p className="product-name">{product.name}</p>
                        <p className="product-brand">{product.brand}</p>
                        <p className="product-price">
                                R$&nbsp;
                          {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                        </p>
                      </Product>
                    ))}
        </Container>
      );
    }
}

export default Products;
