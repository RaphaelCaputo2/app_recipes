import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAllCocktails, singleCocktail } from '../../API/apiCocktails';
import { fetchAllRecipes, singleMeal } from '../../API/apiMeals';
import {
  checkComplete,
  checkFavorite,
  checkProgress,
} from '../../helper/checkHelper';
import useCopyToClipboard from '../../Hooks/useCopyToClipboard';
import RecomendationCard from '../RecomedationCard';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './style.css';

const DetailScreen = (props) => {
  const TIME = 5000;
  const { page, id } = props;
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [recommendation, setRecomendation] = useState([]);
  const [copied, setCopied] = useCopyToClipboard(TIME);
  const [favorite, setFavorite] = useState(false);

  const resolveFetch = (resolve) => {
    setRecipe(resolve);
    setIngredients(resolve.ingredients);
    setMeasure(resolve.measurements);
  };

  useEffect(() => {
    if (page === 'comidas') {
      singleMeal(id).then(resolveFetch);
      fetchAllCocktails('', '', 's').then((resolve) => setRecomendation(resolve));
    } else {
      singleCocktail(id).then(resolveFetch);
      fetchAllRecipes('', '', 's').then((resolve) => setRecomendation(resolve));
    }
  }, [page, id]);

  useEffect(() => {
    setFavorite(checkFavorite(id));
  }, [id]);

  const recommendationMount = (arrRecommendation) => {
    const arrTemp = arrRecommendation || [];
    const maxSize = 6;
    const minSize = 0;
    const keyObject = page === 'comidas' ? 'Drink' : 'Meal';
    const pageRec = page === 'comidas' ? 'bebidas' : 'comidas';
    return (
      <>
        {arrTemp.slice(minSize, maxSize).map((elem, index) => (
          <RecomendationCard
            key={ elem[`str${keyObject}`] }
            thumb={ elem[`str${keyObject}Thumb`] }
            foodName={ elem[`str${keyObject}`] }
            index={ index }
            page={ pageRec }
            idFood={ elem[`id${keyObject}`] }
          />
        ))}
      </>
    );
  };

  const startRecipe = () => {
    if (checkComplete(id)) {
      return null;
    }
    return (
      <Link to={ `/${page}/${id}/in-progress` }>
        <button
          className="btn-start"
          data-testid="start-recipe-btn"
          type="button"
        >
          {checkProgress(id, page)}
        </button>
      </Link>
    );
  };

  const favoriteIcon = (fav) => {
    const favReturn = fav ? (
      <img data-testid="favorite-btn" src={ blackHeartIcon } alt="blackHeart" />
    ) : (
      <img data-testid="favorite-btn" src={ whiteHeartIcon } alt="whiteHeart" />
    );
    return favReturn;
  };

  const favoriteBtn = () => {
    const objRecipe = {
      id,
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

  return (
    <div className="container-int">
      <div className="image-container">
        <img
          src={ recipe.imgRecipe }
          alt=""
          width="200px"
          data-testid="recipe-photo"
        />
      </div>
      <p data-testid="recipe-title" className="title-recipe">
        {recipe.nameRecipe}
      </p>
      <button
        type="button"
        className="share-button"
        data-testid="share-btn"
        onClick={ () => setCopied(`/${page}/${id}`) }
      >
        {copied ? 'Link copiado!' : 'Compartilhar'}
      </button>
      <button type="button" onClick={ favoriteBtn } className="share-button">
        {favoriteIcon(favorite)}
      </button>
      <p data-testid="recipe-category" className="ingredient-title">
        {`${recipe.categoryRecipe} - ${recipe.alcoholic}`}
      </p>
      <ul>
        {ingredients.map((elem, index) => (
          <li key={ elem } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${elem} - ${measure[index]}`}
          </li>
        ))}
      </ul>
      <h4 className="instruction-title">Instruction</h4>
      <p data-testid="instructions" className="instructions">
        {recipe.instructionRecipe}
      </p>
      <div className="container-video">
        <div className="video" data-testid="video" />
      </div>
      <div className="container-cards-carrousel">
        {recommendationMount(recommendation)}
      </div>
      <div className="container-button">{startRecipe()}</div>
    </div>
  );
};

export default DetailScreen;

DetailScreen.propTypes = {
  page: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
