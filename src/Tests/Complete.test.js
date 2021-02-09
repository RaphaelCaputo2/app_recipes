import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import RecipesMade from '../Pages/ RecipesMadePage';

describe('Test with Login Module', () => {
  beforeEach(() => {
    renderWithRouter(<RecipesMade />);
  });

  it('should have a all filter button', async () => {
    const checkButton = await screen.findByTestId('filter-by-all-btn');

    expect(checkButton).toBeInTheDocument();
  });

  it('should have a food filter button', async () => {
    const checkButton = await screen.findByTestId('filter-by-food-btn');

    expect(checkButton).toBeInTheDocument();
  });

  it('should have a all filter button', async () => {
    const checkButton = await screen.findByTestId('filter-by-drink-btn');

    expect(checkButton).toBeInTheDocument();
  });
});
