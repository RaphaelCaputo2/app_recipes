import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../../Context/RecipeContext';
import Footer from '../Footer';
import './style.css';

const ExploreDrinkIngredients = () => {
  const [drinkIngredientsCategory, setDrinkIngredientsCategory] = useState();

  const { dispatch } = useContext(RecipeContext);

  const callApi = async () => {
    const zero = 0;
    const doze = 12;
    const fetching = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    );
    const json = await fetching.json();
    const results = await json.drinks;
    setDrinkIngredientsCategory(results.slice(zero, doze));
  };

  useEffect(() => {
    callApi();
  }, []);

  const renderCards = () => (
    <div className="container-ingredients">
      {drinkIngredientsCategory.map((ingredient, i) => (
        <div key={ i } className="item">
          <Link
            data-testid={ `${i}-ingredient-card` }
            onClick={ () => dispatch({
              type: 'SEARCH_INGREDIENT',
              value: ingredient.strIngredient1,
              typeSearch: 'i',
            }) }
            to="/bebidas"
            key={ i }
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              data-testid={ `${i}-card-img` }
              alt={ ingredient.strIngredient1 }
            />
          </Link>
          <p data-testid={ `${i}-card-name` }>{ingredient.strIngredient1}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {!drinkIngredientsCategory ? 'Carregando...' : renderCards()}
      <Footer />
    </div>
  );
};

export default ExploreDrinkIngredients;
