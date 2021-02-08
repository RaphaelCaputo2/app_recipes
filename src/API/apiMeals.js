const start = 0;
const end = 12;

export const fetchAllRecipes = async (searcher = '', category = '', type) => {
  const URL_BASE = type === 'i'
    ? 'https://www.themealdb.com/api/json/v1/1/filter.php?'
    : 'https://www.themealdb.com/api/json/v1/1/search.php?';
  const URL_ALL = `${URL_BASE}${type}=${searcher}`;
  const URL_CATEGORY = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const URL = category === '' ? URL_ALL : URL_CATEGORY;
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();

  if (!resolveJson.meals) {
    return [];
  }

  const limitArray = resolveJson.meals.slice(start, end);

  return limitArray;
};

export const fetchCategoriesMeals = async () => {
  const sizeInit = 0;
  const sizeEnd = 5;

  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();

  const limitArray = resolveJson.meals.slice(sizeInit, sizeEnd);

  return limitArray;
};

export const singleMeal = async (idMeal) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();
  const tags = resolveJson.meals[0].strTags === null
    ? []
    : resolveJson.meals[0].strTags.split(',');

  const objectModel = {
    idRecipe: resolveJson.meals[0].idMeal,
    nameRecipe: resolveJson.meals[0].strMeal,
    imgRecipe: resolveJson.meals[0].strMealThumb,
    instructionRecipe: resolveJson.meals[0].strInstructions,
    categoryRecipe: resolveJson.meals[0].strCategory,
    ingredients: [],
    measurements: [],
    quantityIngredients: 0,
    areaRecipe: resolveJson.meals[0].strArea,
    typeRecipe: 'comida',
    alcoholic: '',
    tagRecipe: tags,
  };

  const arrayObject = Object.entries(resolveJson.meals[0]);
  const arrayIngredients = arrayObject.filter(
    (elem) => elem[0].includes('strIngredient')
      && elem[1] !== ''
      && elem[1] !== ' '
      && elem[1] !== null,
  );

  const arrayMeasurements = arrayObject.filter((elem) => elem[0].includes('strMeasure'));
  const SIZE = arrayIngredients.length;

  objectModel.ingredients = arrayIngredients
    .slice(start, SIZE)
    .map((elem) => [elem[1], false]);
  objectModel.measurements = arrayMeasurements
    .slice(start, SIZE)
    .map((elem) => elem[1]);
  objectModel.quantityIngredients = SIZE;

  return objectModel;
};
