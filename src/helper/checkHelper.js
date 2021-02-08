export const checkComplete = (id) => {
  const stringDone = localStorage.getItem('doneRecipes');
  const jsonDone = stringDone !== null ? JSON.parse(stringDone) : [];
  return jsonDone.some((elem) => elem.id === id);
};

export const checkProgress = (id, page) => {
  const type = page === 'comidas' ? 'meals' : 'cocktails';
  const initDefault = {
    cocktails: {},
    meals: {},
  };
  const stringProgress = localStorage.getItem('inProgressRecipes');
  const jsonProgress = stringProgress !== null ? JSON.parse(stringProgress) : initDefault;
  const keysJson = Object.keys(jsonProgress[type]);
  return keysJson.some((elem) => elem === id) ? 'Continuar Receita' : 'Iniciar Receita';
};

export const checkFavorite = (id) => {
  const stringFavorite = localStorage.getItem('favoriteRecipes');
  const jsonFavorite = stringFavorite !== null ? JSON.parse(stringFavorite) : [];
  return jsonFavorite.some((elem) => elem.id === id);
};
