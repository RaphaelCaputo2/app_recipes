// import React from 'react';
// import { fireEvent } from '@testing-library/react';
// import renderWithRouter from './renderWithRouter';
// import Footer from '../Components/Footer/Footer';
// import App from '../App';
// import ComidaPage from '../Pages/ComidaPage/index';

// describe('Teste o componente Footer', () => {
//   test('Implemente de acordo com o protótipo', () => {
//     const { getByTestId } = renderWithRouter(<Footer />);
//     const testFooter = getByTestId('footer');
//     const testDrinkBtn = getByTestId('drinks-bottom-btn');
//     const explorerBtn = getByTestId('explore-bottom-btn');
//     const foodBtn = getByTestId('food-bottom-btn');

//     expect(testFooter).toBeInTheDocument();
//     expect(testDrinkBtn).toBeInTheDocument();
//     expect(explorerBtn).toBeInTheDocument();
//     expect(foodBtn).toBeInTheDocument();
//   });
//   test('Redirecione para a rota correta "bebidas', () => {
//     const { getByTestId, history } = renderWithRouter(<Footer />);
//     const testDrinkBtn = getByTestId('drinks-bottom-btn');
//     console.log(history);

//     fireEvent.click(testDrinkBtn);
//     const { pathname } = history.location;
//     expect(pathname).toBe('/bebidas');
//   });
//   test('Redirecione para a rota correta "explorar', () => {
//     const { getByTestId, history } = renderWithRouter(<Footer />);
//     const explorerBtn = getByTestId('explore-bottom-btn');

//     fireEvent.click(explorerBtn);
//     const { pathname } = history.location;
//     expect(pathname).toBe('/explorar');
//   });
//   test('Redirecione para a rota correta "comidas', () => {
//     const { getByTestId, history } = renderWithRouter(<Footer />);
//     const foodBtn = getByTestId('food-bottom-btn');

//     fireEvent.click(foodBtn);
//     const { pathname } = history.location;
//     expect(pathname).toBe('/comidas');
//   });
//   test('Não existe footer na tela de LOGIN(INICIAL)', () => {
//     const { queryByTestId } = renderWithRouter(<App />);
//     const footer = queryByTestId('footer');
//     expect(footer).toBeFalsy();
//   });
//   test('Existe footer na tela de Comidas', () => {
//     const { queryByTestId } = renderWithRouter(<ComidaPage />);
//     const footer = queryByTestId('footer');
//     expect(footer).toBeInTheDocument();
//   });
// });
