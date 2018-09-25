import React from 'react';

import { Container, Product } from './styles';

const Products = ({ products }) => (
  <Container>
    {products.data.map(product => (
      <Product>
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
export default Products;
