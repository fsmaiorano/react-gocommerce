import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as Categoriesctions } from '../../store/ducks/categories';

import { CategoriesContainer } from './styles';

class Categories extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    return (
      <CategoriesContainer>
        <h1>Categories</h1>
      </CategoriesContainer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(Categoriesctions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
