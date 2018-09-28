import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

class Detail extends Component {
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
            <p>{products.activeProduct.name}</p>
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
