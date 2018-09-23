import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as Categoriesctions } from '../../store/ducks/categories';

import { CategoriesContainer, CategoriesItem } from './styles';

class Categories extends Component {
    static propTypes = {
      getCategories: PropTypes.func.isRequired,
      categories: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
          }),
        ),
      }).isRequired,
    };

    componentDidMount() {
      const { getCategories } = this.props;
      getCategories();
    }

    selectCategory = (category) => {
      alert(category.title);
    };

    render() {
      const { categories } = this.props;
      return (
        <CategoriesContainer>
          {!!categories
                    && categories.data.map(category => (
                      <CategoriesItem key={category.id} onClick={() => this.selectCategory(category)} role="presentation">
                        {category.title}
                      </CategoriesItem>
                    ))}
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