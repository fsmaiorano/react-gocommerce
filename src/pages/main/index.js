import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsAction } from '../../store/ducks/products';

import { Container } from './styles';

import Products from '../../components/Products';

class Main extends Component {
    static propTypes = {
      getProducts: PropTypes.func.isRequired,
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

    componentDidMount() {
      const { getProducts } = this.props;
      getProducts();
    }

    render() {
      const { products } = this.props;
      return <Container>{products.data.length > 0 && <Products products={products} />}</Container>;
    }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
