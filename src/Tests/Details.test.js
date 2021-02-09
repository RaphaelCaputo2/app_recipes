import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import DetailScreen from '../Components/DetailScreen';

describe('Test with Login Module', () => {
  beforeEach(() => {
    renderWithRouter(<DetailScreen id={ 15997 } />);
  });

  it('should have a recipe photo', async () => {
    const photoRecipe = await screen.findByTestId('recipe-photo');

    expect(photoRecipe).toBeInTheDocument();
  });

  it('should have a recipe title', async () => {
    const titleRecipe = await screen.findByTestId('recipe-title');

    expect(titleRecipe).toBeInTheDocument();
  });

  it('should have a recipe category', async () => {
    const categoryRecipe = await screen.findByTestId('recipe-category');

    expect(categoryRecipe).toBeInTheDocument();
  });

  it('should have a recipe ingredient', async () => {
    const ingredientRecipe = await screen.findByTestId('0-ingredient-name-and-measure');

    expect(ingredientRecipe).toBeInTheDocument();
  });

  it('should have a recipe instruction', async () => {
    const instructionRecipe = await screen.findByTestId('instructions');

    expect(instructionRecipe).toBeInTheDocument();
  });

  it('should have a recipe card recommendation', async () => {
    const instructionRecipe = await screen.findByTestId('0-card-img');

    expect(instructionRecipe).toBeInTheDocument();
  });

  it('should have a recipe start', async () => {
    const startRecipe = await screen.findByTestId('start-recipe-btn');

    expect(startRecipe).toBeInTheDocument();
  });
});
