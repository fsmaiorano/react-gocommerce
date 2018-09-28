import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Product } from './styles';

class Products extends Component {
    static propTypes = {
      history: PropTypes.func.isRequired,
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

    goDetails = (product) => {
      const { history } = this.props;
      history.push(`/produto/${product.id}`);
    };

    render() {
      const { products } = this.props;
      return (
        <Container>
          {!!products.data
                    && products.data.map(product => (
                      <Product onClick={() => this.goDetails(product)} key={product.id}>
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

export default withRouter(Products);
