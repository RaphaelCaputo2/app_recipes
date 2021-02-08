import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import CompleteScreen from '../../Components/CompleteScreen';

const RecipesMade = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Receitas Feitas" />
      <CompleteScreen />
    </div>
  </div>
);

export default RecipesMade;
