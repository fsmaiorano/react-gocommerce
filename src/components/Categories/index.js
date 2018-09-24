import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as Categoriesctions } from '../../store/ducks/categories';

import { CategoriesContainer, CategoriesItem } from './styles';

class Categories extends Component {
    static propTypes = {
      getCategories: PropTypes.func.isRequired,
      setActiveCategory: PropTypes.func.isRequired,
      getActiveCategory: PropTypes.func.isRequired,
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
      const { getCategories, getActiveCategory } = this.props;
      getCategories();
      getActiveCategory();
    }

    selectCategory = (category) => {
      const { setActiveCategory } = this.props;
      setActiveCategory(category);
    };

    render() {
      const { categories, activeCategory } = this.props;
      return (
        <CategoriesContainer>
          {!!categories
                    && categories.data.map(category => (
                      <CategoriesItem key={category.id}>
                        <Link onClick={() => this.selectCategory(category)} to={{ pathname: `/categoria/${category.id}` }}>
                          {category.title}
                        </Link>
                      </CategoriesItem>
                    ))}
        </CategoriesContainer>
      );
    }
}

const mapStateToProps = state => ({
  categories: state.categories,
  activeCategory: state.activeCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(Categoriesctions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
