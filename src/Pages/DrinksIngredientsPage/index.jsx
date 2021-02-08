import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import Footer from '../../Components/Footer';
import ExploreDrinkIngredients from '../../Components/ExploreDrinkIngredient';

const DrinkIngredientes = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Explorar Ingredientes" />
      <ExploreDrinkIngredients />
      <Footer />
    </div>
  </div>
);

export default DrinkIngredientes;
