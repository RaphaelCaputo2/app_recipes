const start = 0;
const end = 12;

export const fetchAllCocktails = async (
  searcher = '',
  category = '',
  type,
) => {
  const URL_BASE = type === 'i'
    ? 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  const URL_ALL = `${URL_BASE}${type}=${searcher}`;
  const URL_CATEGORY = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  const URL = category === '' ? URL_ALL : URL_CATEGORY;
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();

  if (!resolveJson.drinks) {
    return [];
  }

  const limitArray = resolveJson.drinks.slice(start, end);

  return limitArray;
};

export const fetchCategoriesCocktails = async () => {
  const sizeInit = 0;
  const sizeEnd = 5;

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();

  const limitArray = resolveJson.drinks.slice(sizeInit, sizeEnd);

  return limitArray;
};

export const singleCocktail = async (idCocktail) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
  const resolve = await fetch(URL);

  const resolveJson = await resolve.json();
  const tags = resolveJson.drinks[0].strTags === null
    ? []
    : resolveJson.drinks[0].strTags.split(',');
  const objectModel = {
    idRecipe: resolveJson.drinks[0].idDrink,
    nameRecipe: resolveJson.drinks[0].strDrink,
    imgRecipe: resolveJson.drinks[0].strDrinkThumb,
    instructionRecipe: resolveJson.drinks[0].strInstructions,
    categoryRecipe: resolveJson.drinks[0].strCategory,
    ingredients: [],
    measurements: [],
    quantityIngredients: 0,
    areaRecipe: '',
    typeRecipe: 'bebida',
    alcoholic: resolveJson.drinks[0].strAlcoholic,
    tagRecipe: tags,
  };

  const arrayObject = Object.entries(resolveJson.drinks[0]);
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
  objectModel.measurements = arrayMeasurements.slice(start, SIZE).map((elem) => elem[1]);
  objectModel.quantityIngredients = SIZE;

  return objectModel;
};
