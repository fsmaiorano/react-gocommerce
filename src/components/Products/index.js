import React from 'react';

const Products = ({ products }) => products.data.map(product => <p>{product.name}</p>);

export default Products;
