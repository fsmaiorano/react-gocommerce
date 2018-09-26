import React, { Component } from 'react';

class Category extends Component {
    state = {
      category: null,
    };

    componentDidMount() {}

    selectedCategory = (categoryId) => {
      const { category } = this.state;
      if (category !== categoryId) {
        this.setState({ category: categoryId });
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

export default Category;
