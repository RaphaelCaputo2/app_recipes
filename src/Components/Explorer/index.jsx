import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import iconDrink from '../../images/drinkIcon.svg';
import iconMeals from '../../images/mealIcon.svg';
import iconSurprise from '../../images/explorersurprise.svg';
import './style.css';

const Explorer = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const [sortedFood, setSortedFood] = useState([]);
  const [sortedDrink, setSortedDrink] = useState([]);

  const callApiFood = async () => {
    const food = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const jsonFood = await food.json();
    const sortedFoodId = await jsonFood.meals[0];
    return sortedFoodId;
  };

  const callApiDrink = async () => {
    const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const jsonDrink = await drink.json();
    const sortedDrinksId = await jsonDrink.drinks[0];
    return sortedDrinksId;
  };

  useEffect(() => {
    callApiFood().then((r) => setSortedFood(r));
    callApiDrink().then((r) => setSortedDrink(r));
  }, []);

  const redirect = () => {
    if (pathname === '/explorar/comidas') {
      return (
        <div className="container-option">
          <Link
            to="/explorar/comidas/ingredientes"
            data-testid="explore-by-ingredient"
            className="link"
          >
            <img
              src={ iconMeals }
              alt="Explorar por ingredientes"
            />
            Por Ingredientes
          </Link>
          <Link
            to="/explorar/comidas/area"
            data-testid="explore-by-area"
            className="link"
          >
            <img src={ iconMeals } alt="Explorar por origem" />
            Por Local de Origem
          </Link>
          <Link
            to={ `/comidas/${sortedFood.idMeal}` }
            data-testid="explore-surprise"
            className="link"
          >
            <img src={ iconSurprise } alt="Me Surpreenda" />
            Me Surpreenda!
          </Link>
        </div>
      );
    }
    if (pathname === '/explorar/bebidas') {
      return (
        <div className="container-option">
          <Link
            to="/explorar/bebidas/ingredientes"
            data-testid="explore-by-ingredient"
            className="link"
          >
            <img src={ iconDrink } alt="Explorar bebidas por ingredientes" />
            Por Ingredientes
          </Link>
          <Link
            to={ `/bebidas/${sortedDrink.idDrink}` }
            data-testid="explore-surprise"
            className="link"
          >
            <img src={ iconSurprise } alt="Me surpreenda" />
            Me Surpreenda!
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      { redirect() }
    </div>
  );
};

export default Explorer;
