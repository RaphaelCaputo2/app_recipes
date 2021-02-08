import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { fetchAllRecipes } from '../../API/apiMeals';
import { fetchAllCocktails } from '../../API/apiCocktails';
import RecipeContext from '../../Context/RecipeContext';
import CardFood from '../CardFood';
import CategoryList from '../CategoryList';
import './style.css';

const MainScreen = (props) => {
  const { page } = props;
  const { dispatch } = useContext(RecipeContext);
  const {
    state: {
      mealsData,
      cocktailsData,
      search: { searchingFilter, searchType, searchParam },
    },
  } = useContext(RecipeContext);

  const {
    state: {
      search: { categoryFilterDrinks, categoryFilterMeals },
    },
  } = useContext(RecipeContext);

  useEffect(() => {
    fetchAllRecipes(searchParam, categoryFilterMeals, searchType).then(
      (arrayLimit) => dispatch({
        type: 'SET_MEALS',
        data: arrayLimit,
      }),
    );
    fetchAllCocktails(searchParam, categoryFilterDrinks, searchType).then(
      (arrayLimit) => dispatch({
        type: 'SET_COCKTAILS',
        data: arrayLimit,
      }),
    );
  }, [
    dispatch,
    categoryFilterDrinks,
    categoryFilterMeals,
    searchType,
    searchParam,
  ]);

  const checkRedirect = (name, arr, id) => {
    const ZERO = 0;
    if (searchingFilter && arr.length === ZERO) {
      // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    const unique = 1;
    if (arr.length === unique && searchingFilter) {
      return <Redirect to={ `${name}/${arr[0][id]}` } />;
    }
  };

  const mealsDoc = () => (
    <div className="container-cards">
      {mealsData.map(({ strMealThumb, strMeal, idMeal }, index) => (
        <CardFood
          idFood={ idMeal }
          page={ page }
          key={ strMeal }
          index={ index }
          foodName={ strMeal }
          thumb={ strMealThumb }
        />
      ))}
      {checkRedirect('comidas', mealsData, 'idMeal')}
    </div>
  );

  const cockTailsDoc = () => (
    <div className="container-cards">
      {cocktailsData.map(({ strDrinkThumb, strDrink, idDrink }, index) => (
        <CardFood
          idFood={ idDrink }
          page={ page }
          key={ strDrink }
          index={ index }
          foodName={ strDrink }
          thumb={ strDrinkThumb }
        />
      ))}
      {checkRedirect('bebidas', cocktailsData, 'idDrink')}
    </div>
  );

  return (
    <div className="main-screen-container">
      <CategoryList page={ page } />
      {page === 'comidas' ? mealsDoc() : cockTailsDoc()}
    </div>
  );
};

export default MainScreen;

MainScreen.propTypes = {
  page: PropTypes.string.isRequired,
};
