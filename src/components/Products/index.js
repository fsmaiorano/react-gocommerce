import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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

    render() {
      const { products } = this.props;
      return (
        <Container>
          {!!products.data
                    && products.data.map(product => (
                      <NavLink to={{ pathname: `/produto/${product.id}` }} key={product.id}>
                        <Product>
                          <img src={product.image} alt={product.name} />
                          <p className="product-name">{product.name}</p>
                          <p className="product-brand">{product.brand}</p>
                          <p className="product-price">
                                    R$&nbsp;
                            {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                          </p>
                        </Product>
                      </NavLink>
                    ))}
        </Container>
      );
    }
}

export default Products;
