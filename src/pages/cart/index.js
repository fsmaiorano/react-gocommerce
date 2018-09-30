import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

class Cart extends Component {
  componentDidMount() {
    debugger;
    const { cart } = this.props;
  }

    removeItem = (item) => {};

    render() {
      return <h1>dasdas</h1>;
    }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
