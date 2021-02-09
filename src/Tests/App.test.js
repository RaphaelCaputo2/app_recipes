import React from 'react';
import { screen, act, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
// import LoginPage from '../Pages/LoginPage';
import App from '../App';

const emailString = 'email-input';
const passwordString = 'password-input';
const btnString = 'login-submit-btn';
describe('Test with Login Module', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('should have login form', () => {
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btn = screen.getByTestId(btnString);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('should be disabled, without the fields being empty', async () => {
    const inputEmail = screen.getByTestId(emailString);
    const password = screen.getByTestId(passwordString);
    const btnSubmit = screen.getByTestId(btnString);

    await act(async () => {
      fireEvent.change(inputEmail, {
        target: { value: '' },
      });

      fireEvent.change(password, {
        target: { value: '' },
      });
    });
    expect(btnSubmit).toHaveAttribute('disabled');
  });

  it('should be disabled if password is empty', async () => {
    const emailInput = screen.getByTestId(emailString);
    const passwordInput = screen.getByTestId(passwordString);
    const btnSubmit = screen.getByTestId(btnString);

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'exemplo@gmail.com' },
      });

      fireEvent.change(passwordInput, {
        target: { value: '' },
      });
      expect(btnSubmit).toHaveAttribute('disabled');
    });
  });

  it('should be disabled if password is empty', async () => {
    const emailInput = screen.getByTestId(emailString);
    const passwordInput = screen.getByTestId(passwordString);
    const btnSubmit = screen.getByTestId(btnString);

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: '' },
      });

      fireEvent.change(passwordInput, {
        target: { value: '123123113123' },
      });
    });
    expect(btnSubmit).toHaveAttribute('disabled');
  });

  it('should be not disabled', async () => {
    const emailInput = screen.getByTestId(emailString);
    const passwordInput = screen.getByTestId(passwordString);
    const btnSubmit = screen.getByTestId(btnString);

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'exemplo@gmail.com' },
      });
      fireEvent.change(passwordInput, {
        target: { value: '123123113123' },
      });
    });
    expect(btnSubmit).not.toHaveAttribute('disabled');
  });
});
/*
const { history } = renderWithRouter(<LoginPage />);
const { pathname } = history.location;
expect(pathname).toBe('/comidas'); */
