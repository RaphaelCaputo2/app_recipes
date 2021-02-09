import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from '../Pages/HomePage';

describe('Test with Food Module', () => {
  beforeEach(() => {
    renderWithRouter(<Home />);
  });

  it('should have header element', () => {
    const imgUser = screen.getByTestId('profile-top-btn');

    expect(imgUser).toBeInTheDocument();
  });

  it('Should have title', () => {
    const imTitle = screen.getByRole('heading', {
      name: /comidas/i,
    });

    expect(imTitle).toBeInTheDocument();
  });

  it('Should have beefButton', async () => {
    const categoryBeef = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(categoryBeef);

    expect(categoryBeef).toBeInTheDocument();
  });

  it('Should have breakfastButton', async () => {
    const categoryBreakfast = await screen.findByTestId('Breakfast-category-filter');

    expect(categoryBreakfast).toBeInTheDocument();
  });

  it('Should have chickenButton', async () => {
    const categoryChicken = await screen.findByTestId('Chicken-category-filter');

    expect(categoryChicken).toBeInTheDocument();
  });

  it('Should have dessertButton', async () => {
    const categoryDessert = await screen.findByTestId('Dessert-category-filter');

    expect(categoryDessert).toBeInTheDocument();
  });

  it('Should have goatButton', async () => {
    const categoryGoat = await screen.findByTestId('Goat-category-filter');

    expect(categoryGoat).toBeInTheDocument();
  });

  it('Should have allButton', async () => {
    const categoryAll = await screen.findByTestId('All-category-filter');

    expect(categoryAll).toBeInTheDocument();
  });

  it('Should have drinks button', async () => {
    const drinksRedirect = await screen.findByTestId('drinks-bottom-btn');

    expect(drinksRedirect).toBeInTheDocument();
  });

  it('Should have explore button', async () => {
    const exploreRedirect = await screen.findByTestId('explore-bottom-btn');

    expect(exploreRedirect).toBeInTheDocument();
  });

  it('Should have food button', async () => {
    const foodRedirect = await screen.findByTestId('food-bottom-btn');

    expect(foodRedirect).toBeInTheDocument();
  });
});
