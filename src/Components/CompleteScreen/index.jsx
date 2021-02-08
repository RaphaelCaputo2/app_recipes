import React, { useEffect, useState } from 'react';
import CardComplete from '../CardComplete';
import './style.css';

const CompleteScreen = () => {
  const [arrDone, setArrDone] = useState([]);
  const [filter, setFilter] = useState('');

  const acessStorage = () => {
    const stringDone = localStorage.getItem('doneRecipes');
    const jsonDone = stringDone !== null ? JSON.parse(stringDone) : [];
    return jsonDone;
  };

  useEffect(() => {
    const doneRecipes = acessStorage();
    setArrDone(doneRecipes);
  }, []);

  const arrFilter = arrDone.filter((elem) => elem.type.includes(filter));

  return (
    <div className="container-buttons">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('comida') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('bebida') }
      >
        Drinks
      </button>
      {arrFilter.map((elem, index) => (
        <CardComplete
          key={ elem.name }
          num={ index }
          img={ elem.image }
          category={ elem.category }
          nameRecipe={ elem.name }
          date={ elem.doneDate }
          tags={ elem.tags }
          area={ elem.area }
          alcoholicOrNot={ elem.alcoholicOrNot }
          type={ elem.type }
          id={ elem.id }
        />
      ))}
    </div>
  );
};

export default CompleteScreen;
