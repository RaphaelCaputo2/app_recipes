import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCopyToClipboard from '../../Hooks/useCopyToClipboard';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './FavoriteRecipe.css';

const FavoritesRecipes = () => {
  const timeoutTextCopy = 3000;
  const [isCopied, handleCopy] = useCopyToClipboard(timeoutTextCopy);
  const [favoriteRecipes, setFavoriteRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.favoriteRecipes) {
      return;
    }
    setFavoriteRecipe(JSON.parse(localStorage.favoriteRecipes));
    setIsLoading(false);
  }, []);

  const handleClick = (index) => {
    const newFavoriteRecipes = [...favoriteRecipes];
    newFavoriteRecipes.splice(index, 1);
    setFavoriteRecipe(newFavoriteRecipes);
    localStorage.favoriteRecipes = JSON.stringify(newFavoriteRecipes);
  };

  const filterRecipes = ({ innerText }) => {
    if (innerText === 'Food') {
      const newFavorite = favoriteRecipes.filter((favorite) => (
        favorite.type === 'comida'
      ));
      setFavoriteRecipe(newFavorite);
    } else if (innerText === 'Drinks') {
      const newFavorite = favoriteRecipes.filter((favorite) => (
        favorite.type === 'bebida'
      ));
      setFavoriteRecipe(newFavorite);
    } else {
      setFavoriteRecipe(JSON.parse(localStorage.favoriteRecipes));
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container-buttons">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ ({ target }) => { filterRecipes(target); } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ ({ target }) => { filterRecipes(target); } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ ({ target }) => { filterRecipes(target); } }
      >
        Drinks
      </button>
      <div>
        { favoriteRecipes
          .map((
            {
              id,
              type,
              image,
              alcoholicOrNot,
              name,
              area,
              category,
            },
            index,
          ) => (
            <div
              key={ index }
            >
              <Link to={ `/${type}s/${id}` }>
                <img
                  className="receipe-img"
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                />
              </Link>
              {
                (type === 'comida')
                  ? (
                    <p
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      { `${area} - ${category}` }
                    </p>)
                  : (
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      { alcoholicOrNot }
                    </p>)
              }
              <Link to={ `/${type}s/${id}` }>
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  { name }
                </p>
              </Link>
              <button
                data-testid="share-btn"
                type="button"
                onClick={ () => handleCopy(`/${type}s/${id}`) }
              >
                <img
                  src={ shareIcon }
                  alt="Compatilhar Receita"
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
              { isCopied ? <p>Link copiado!</p> : true }
              <button
                type="button"
                onClick={ () => { handleClick(index); } }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  alt="Botão de Favorito"
                />
              </button>
            </div>
          )) }
      </div>
    </div>
  );
};

export default FavoritesRecipes;
