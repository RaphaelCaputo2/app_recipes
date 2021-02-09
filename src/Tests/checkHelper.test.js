import { singleMeal } from '../API/apiMeals';

describe('Test with Login Module', () => {
  it('should have a reducer SET_MEALS', async () => {
    const initState = await singleMeal('52977');
    const resolve = '52977';
    expect(initState.idRecipe).toBe(resolve);
  });
});
