import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Perfil from '../Pages/PerfilPage';

describe('Test with Profile Module', () => {
  beforeEach(() => {
    renderWithRouter(<Perfil />);
  });

  it('should have a profile title', () => {
    const profileTitle = screen.getByRole('heading', {
      name: /perfil/i,
    });

    expect(profileTitle).toBeInTheDocument();
  });

  it('should have a profile email', () => {
    const profileEmail = screen.getByTestId('profile-email');

    expect(profileEmail).toBeInTheDocument();
  });

  it('should have done recipes button', () => {
    const doneBtn = screen.getByTestId('profile-done-btn');

    expect(doneBtn).toBeInTheDocument();
  });

  it('should have done recipes button', async () => {
    const doneBtn = screen.getByTestId('profile-done-btn');

    fireEvent.click(doneBtn);

    const doneTitle = await screen.findByTestId('page-title');
    expect(doneTitle).toBeInTheDocument();
  });
});
