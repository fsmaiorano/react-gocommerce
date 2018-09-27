import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsAction } from '../../store/ducks/products';

import Products from '../../components/Products';
import { Container } from './styles';

class Category extends Component {
    state = {
      category: null,
    };

    componentDidMount() {}

    selectedCategory = (categoryId) => {
      const { category } = this.state;
      const { getProductById } = this.props;
      if (category !== categoryId) {
        this.setState({ category: categoryId });
        getProductById(categoryId);
      }
    };

    render() {
      const { match, products } = this.props;
      this.selectedCategory(match.params.id);
      return <Container>{!!products && <Products products={products} />}</Container>;
    }
}

const mapStateToProps = state => ({
  products: state.products,
});

const dispatchStateToProps = dispatch => bindActionCreators(ProductsAction, dispatch);

export default connect(
  mapStateToProps,
  dispatchStateToProps,
)(Category);
