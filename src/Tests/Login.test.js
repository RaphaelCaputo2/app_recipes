import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import LoginPage from '../Pages/LoginPage';

describe('Test with Login Module', () => {
  beforeEach(() => {
    renderWithRouter(<LoginPage />);
  });

  it('should have a login field', async () => {
    const inputLogin = await screen.findByRole('textbox');

    expect(inputLogin).toBeInTheDocument();
  });

  it('should have password field', async () => {
    const inputPassword = await screen.findByTestId('password-input');

    expect(inputPassword).toBeInTheDocument();
  });

  it('should have sign in button', async () => {
    const signButton = await screen.findByTestId('password-input');

    expect(signButton).toBeInTheDocument();
  });
});
