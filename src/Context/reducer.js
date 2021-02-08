export default function reducer(state, action) {
  switch (action.type) {
  case 'SET_USER':
    localStorage.setItem('user', JSON.stringify({ email: action.userEmail }));
    return { ...state, user: { userEmail: action.userEmail } };

  case 'SET_MEALS':
    return { ...state, mealsData: action.data };

  case 'SET_COCKTAILS':
    return { ...state, cocktailsData: action.data };

  case 'SET_CATEGORIES_MEALS':
    return { ...state, mealsCategory: action.data };

  case 'SET_CATEGORIES_COCKTAILS':
    return { ...state, cocktailsCategory: action.data };

  case 'SET_FILTER_CATEGORY_DRINKS':
    return {
      ...state,
      search: {
        ...state.search,
        categoryFilterDrinks: action.categoryName,
        searchFilter: false,
        searchType: 's',
      },
    };

  case 'SET_FILTER_CATEGORY_MEALS':
    return {
      ...state,
      search: {
        ...state.search,
        categoryFilterMeals: action.categoryName,
        searchingFilter: false,
        searchType: 's',
      },
    };

  case 'SEARCH_FILTER':
    return {
      ...state,
      search: {
        ...state.search,
        searchingFilter: true,
        searchParam: action.value,
        searchType: action.typeSearch,
        categoryFilterDrinks: '',
        categoryFilterMeals: '',
      },
    };

  case 'SEARCH_INGREDIENT':
    return {
      ...state,
      search: {
        ...state.search,
        searchParam: action.value,
        searchType: action.typeSearch,
        categoryFilterDrinks: '',
        categoryFilterMeals: '',
      },
    };
  default:
    throw new Error();
  }
}
