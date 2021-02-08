import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCategoriesCocktails } from '../../API/apiCocktails';
import RecipeContext from '../../Context/RecipeContext';
import { fetchCategoriesMeals } from '../../API/apiMeals';
import './style.css';

const CategoryList = (props) => {
  const { page } = props;
  const { dispatch } = useContext(RecipeContext);
  const {
    state: { mealsCategory, cocktailsCategory },
  } = useContext(RecipeContext);
  const {
    state: {
      search: { categoryFilterDrinks, categoryFilterMeals },
    },
  } = useContext(RecipeContext);

  useEffect(() => {
    fetchCategoriesMeals().then((arrayLimit) => dispatch({
      type: 'SET_CATEGORIES_MEALS',
      data: arrayLimit,
    }));
    fetchCategoriesCocktails().then((arrayLimit) => dispatch({
      type: 'SET_CATEGORIES_COCKTAILS',
      data: arrayLimit,
    }));
  }, [dispatch]);

  const handleCategoryDrinks = ({ target }) => {
    const { name } = target;
    if (name === categoryFilterDrinks) {
      dispatch({ type: 'SET_FILTER_CATEGORY_DRINKS', categoryName: '' });
    } else {
      dispatch({ type: 'SET_FILTER_CATEGORY_DRINKS', categoryName: name });
    }
  };

  const handleCategoryMeals = ({ target }) => {
    const { name } = target;
    if (name === categoryFilterMeals) {
      dispatch({ type: 'SET_FILTER_CATEGORY_MEALS', categoryName: '' });
    } else {
      dispatch({ type: 'SET_FILTER_CATEGORY_MEALS', categoryName: name });
    }
  };

  const mealsCategoriesDoc = () => (
    <div className="category-filter">
      {mealsCategory.map(({ strCategory }) => (
        <button
          name={ strCategory }
          key={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          onClick={ handleCategoryMeals }
          className="btn-filter"
        >
          {strCategory}
        </button>
      ))}
      <button
        name="All"
        className="btn-filter"
        key="All"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => dispatch({
          type: 'SET_FILTER_CATEGORY_MEALS',
          categoryName: '' }) }
      >
        All
      </button>
    </div>
  );

  const cocktailsCategoriesDoc = () => (
    <div className="category-filter">
      {cocktailsCategory.map(({ strCategory }) => (
        <button
          name={ strCategory }
          key={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          onClick={ handleCategoryDrinks }
          className="btn-filter"
        >
          {strCategory}
        </button>
      ))}
      <button
        name="All"
        className="btn-filter"
        key="All"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => dispatch({
          type: 'SET_FILTER_CATEGORY_DRINKS',
          categoryName: '' }) }
      >
        All
      </button>
    </div>
  );

  return page === 'comidas' ? mealsCategoriesDoc() : cocktailsCategoriesDoc();
};

export default CategoryList;

CategoryList.propTypes = {
  page: PropTypes.string.isRequired,
};
