import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import ProgressScreen from '../Components/ProgressScreen';

describe('Test with Profile Module', () => {
  beforeEach(() => {
    renderWithRouter(<ProgressScreen idReceita={ 15997 } />);
  });

  it('should have a favorite button', async () => {
    const checkButton = await screen.findByTestId('favorite-btn');

    expect(checkButton).toBeInTheDocument();
  });

  it('should have a share button', async () => {
    const checkButton = await screen.findByTestId('share-btn');

    expect(checkButton).toBeInTheDocument();
  });

  it('should have a end button', async () => {
    const checkButton = await screen.findByTestId('finish-recipe-btn');

    expect(checkButton).toBeInTheDocument();
  });
});
