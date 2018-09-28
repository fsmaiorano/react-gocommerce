import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
    state = {
      product: null,
    };

    componentDidMount() {
      const { products, history, match } = this.props;

      if (products.data.length === 0) return history.push('/');

      const product = products.data.filter(p => p.id === parseInt(match.params.id, 0))[0];
      this.setState({ product });
    }

    render() {
      const { product } = this.state;
      return (
        <div>
          {product !== null ? (
            <div>
              <p>{product.id}</p>
              <p>{product.name}</p>
            </div>
          ) : null}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Detail);
