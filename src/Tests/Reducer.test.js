import reducer from '../Context/reducer';

describe('Test with Login Module', () => {
  it('should have a reducer SET_MEALS', async () => {
    const initState = {};
    const action = { type: 'SET_MEALS', data: 10 };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.mealsData).toBe(resolve);
  });
  it('should have a  SET_COCKTAILS', async () => {
    const initState = {};
    const action = { type: 'SET_COCKTAILS', data: 10 };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.cocktailsData).toBe(resolve);
  });
  it('should have a  SEARCH_FILTER', async () => {
    const initState = { search: {} };
    const action = { type: 'SEARCH_FILTER', value: 10, typeSearch: 'ingredient' };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.search.searchParam).toBe(resolve);
  });
  it('should have a  SEARCH_INGREDIENT', async () => {
    const initState = { search: {} };
    const action = { type: 'SEARCH_INGREDIENT', value: 10, typeSearch: 'ingredient' };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.search.searchParam).toBe(resolve);
  });
  it('should have a  SET_USER', async () => {
    const initState = { user: { userEmail: 1 } };
    const action = { type: 'SET_USER', userEmail: 10 };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.user.userEmail).toBe(resolve);
  });
  it('should have a  SET_FILTER_CATEGORY_DRINKS', async () => {
    const initState = { search: {} };
    const action = { type: 'SET_FILTER_CATEGORY_DRINKS', categoryName: 10 };
    const actionResolve = reducer(initState, action);
    const resolve = 10;
    expect(actionResolve.search.categoryFilterDrinks).toBe(resolve);
  });
});
