import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductDetail from '../../components/ProductDetail';

import { Container } from './styles';

class Detail extends Component {
    static propTypes = {
      history: PropTypes.shape({ push: PropTypes.func }).isRequired,
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
      const { products, history } = this.props;

      if (products.activeProduct === null) history.push('/');
    }

    render() {
      const { products } = this.props;
      return (
        <div>
          {products.activeProduct !== null ? (
            <Container>
              <ProductDetail product={products.activeProduct} />
            </Container>
          ) : null}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Detail);
