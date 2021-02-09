import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Searcher from '../Components/Searcher';

const searchInput = 'search-input';

describe('Test with Login Module', () => {
  beforeEach(() => {
    renderWithRouter(<Searcher />);
  });

  it('should have input are', async () => {
    const checkInput = screen.getByText(/primeira letra/i);
    const textInput = screen.getByTestId(searchInput);
    const searchButton = screen.getByTestId(searchInput);

    fireEvent.change(textInput, { target: { value: 's' } });
    fireEvent.click(searchButton);

    expect(checkInput).toBeInTheDocument();
  });

  it('should have input name', async () => {
    const checkInput = screen.getByText(/nome/i);
    const textInput = screen.getByTestId(searchInput);
    const searchButton = screen.getByTestId(searchInput);

    fireEvent.change(textInput, { target: { value: 'cocoa' } });
    fireEvent.click(searchButton);

    expect(checkInput).toBeInTheDocument();
  });
});
