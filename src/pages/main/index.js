import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsAction } from '../../store/ducks/products';

import { Container } from './styles';

class Main extends Component {
    static propTypes = {
      getProducts: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { getProducts } = this.props;
      getProducts();
    }

    render() {
      const { products } = this.props;
      return <Container>{!!products && products.data.map(product => <p>{product.name}</p>)}</Container>;
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
