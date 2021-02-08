import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import Footer from '../../Components/Footer';
import ExploreFoodIngredients from '../../Components/ExploreFoodsIngredients';

const FoodIngredients = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Explorar Ingredientes" />
      <ExploreFoodIngredients />
      <Footer />
    </div>
  </div>
);

export default FoodIngredients;
