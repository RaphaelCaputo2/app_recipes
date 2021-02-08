const initialState = {
  user: {
    userEmail: '',
  },
  search: {
    categoryFilterDrinks: '',
    categoryFilterMeals: '',
    searchingFilter: false,
    searchParam: '',
    searchType: 's',
  },
  mealsData: [],
  cocktailsData: [],
  mealsCategory: [],
  cocktailsCategory: [],
};

export default initialState;
