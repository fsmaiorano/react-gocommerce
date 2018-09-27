import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsAction } from '../../store/ducks/products';

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
      const { match } = this.props;
      this.selectedCategory(match.params.id);
      return (
        <h1>
                Categoria
          {match.params.id}
        </h1>
      );
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
