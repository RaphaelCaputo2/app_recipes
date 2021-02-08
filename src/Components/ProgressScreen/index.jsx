import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { singleCocktail } from '../../API/apiCocktails';
import { singleMeal } from '../../API/apiMeals';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import dateBrModel from '../../helper/dateConverter';
import './style.css';

const ProgressScreen = (props) => {
  const { idReceita } = props;
  const location = useLocation();
  const history = useHistory();

  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [copyBtn, setCopyBtn] = useState('Compartilhar');
  const [favorite, setFavorite] = useState(false);
  const [complete, setComplete] = useState(true);

  useEffect(() => {
    const stringStorage = localStorage.getItem('inProgressRecipes');
    const jsonStorage = JSON.parse(stringStorage);

    if (location.pathname.includes('comidas')) {
      singleMeal(idReceita).then((r) => {
        setRecipe(r);
        if (jsonStorage && jsonStorage.meals[idReceita]) {
          setIngredients(jsonStorage.meals[idReceita]);
        } else setIngredients(r.ingredients);
      });
    } else {
      singleCocktail(idReceita).then((r) => {
        setRecipe(r);
        if (jsonStorage && jsonStorage.cocktails[idReceita]) {
          setIngredients(jsonStorage.cocktails[idReceita]);
        } else setIngredients(r.ingredients);
      });
    }
  }, [idReceita, location.pathname]);

  useEffect(() => {
    const path = location.pathname.includes('comidas') ? 'meals' : 'cocktails';
    const stringStorage = localStorage.getItem('inProgressRecipes');
    const jsonStorage = JSON.parse(stringStorage);
    if (ingredients.every((elem) => elem[1] === true)) {
      setComplete(false);
    } else {
      setComplete(true);
    }
    const objectStorage = {
      meals: {},
      cocktails: {},
    };

    if (jsonStorage === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(objectStorage));
    } else {
      jsonStorage[path][idReceita] = ingredients;
      localStorage.setItem('inProgressRecipes', JSON.stringify(jsonStorage));
    }
  }, [ingredients, idReceita, location.pathname]);

  useEffect(() => {
    const stringFavorite = localStorage.getItem('favoriteRecipes');
    const jsonFavorite = JSON.parse(stringFavorite);

    if (
      jsonFavorite !== null
      && jsonFavorite.some((elem) => elem.id === idReceita)
    ) {
      setFavorite(true);
    }
  }, [idReceita]);

  const handleProgress = ({ target }) => {
    const { name } = target;
    const newIngredients = ingredients.map((elem) => {
      if (elem[0] === name) return [elem[0], !elem[1]];
      return elem;
    });
    setIngredients(newIngredients);
  };

  const copyLink = () => {
    const typeRecipe = location.pathname.includes('comidas')
      ? 'comidas'
      : 'bebidas';
    setCopyBtn('Link copiado!');
    return `http://localhost:3000/${typeRecipe}/${idReceita}`;
  };

  const defineFavorite = () => {
    if (favorite) {
      return (
        <img data-testid="favorite-btn" src={ blackHeartIcon } alt="blackHeart" />
      );
    }
    return (
      <img data-testid="favorite-btn" src={ whiteHeartIcon } alt="whiteHeart" />
    );
  };

  const favoriteBtn = () => {
    const objRecipe = {
      id: idReceita,
      type: recipe.typeRecipe,
      area: recipe.areaRecipe,
      category: recipe.categoryRecipe,
      alcoholicOrNot: recipe.alcoholic,
      name: recipe.nameRecipe,
      image: recipe.imgRecipe,
    };
    const stringFavorite = localStorage.getItem('favoriteRecipes');
    const jsonFavorite = stringFavorite !== null ? JSON.parse(stringFavorite) : [];
    const allValue = [...jsonFavorite, objRecipe];
    const stringRecipe = JSON.stringify(allValue);
    localStorage.setItem('favoriteRecipes', stringRecipe);
    setFavorite(!favorite);
  };

  const doneRecipe = () => {
    const actualDate = dateBrModel();
    const objRecipe = {
      id: idReceita,
      type: recipe.typeRecipe,
      area: recipe.areaRecipe,
      category: recipe.categoryRecipe,
      alcoholicOrNot: recipe.alcoholic,
      name: recipe.nameRecipe,
      image: recipe.imgRecipe,
      doneDate: actualDate,
      tags: recipe.tagRecipe,
    };
    const stringDone = localStorage.getItem('doneRecipes');
    const jsonDone = stringDone !== null ? JSON.parse(stringDone) : [];
    const allValue = [...jsonDone, objRecipe];
    const stringRecipe = JSON.stringify(allValue);
    localStorage.setItem('doneRecipes', stringRecipe);
    history.push('/receitas-feitas');
  };

  return (
    <div>
      <div className="image-container">
        <img
          src={ recipe.imgRecipe }
          alt=""
          width="200"
          data-testid="recipe-photo"
        />
      </div>
      <p data-testid="recipe-title" className="title-recipe">
        {recipe.nameRecipe}
      </p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => copy(copyLink()) }
        className="share-button"
      >
        {copyBtn}
      </button>
      <button type="button" onClick={ favoriteBtn } className="share-button">
        {defineFavorite()}
      </button>
      <p data-testid="recipe-category" className="instruction-title">
        {recipe.categoryRecipe}
      </p>
      <div className="container-ingredient">
        {ingredients.map((elem, index) => (
          <label
            htmlFor={ elem[0] }
            key={ elem[0] }
            style={ { display: 'block' } }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              id={ elem[0] }
              name={ elem[0] }
              checked={ elem[1] }
              onChange={ handleProgress }
            />
            {`${elem[0]} - ${recipe.measurements[index] || ''}`}
          </label>
        ))}
      </div>
      <p data-testid="instructions" className="instructions">
        {recipe.instructionRecipe}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ complete }
        onClick={ doneRecipe }
        className="btn-start"
      >
        Finalizar
      </button>
    </div>
  );
};

export default ProgressScreen;

ProgressScreen.propTypes = {
  idReceita: PropTypes.string.isRequired,
};
