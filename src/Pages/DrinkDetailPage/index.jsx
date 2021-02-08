import React from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import DetailScreen from '../../Components/DetailScreen';
// import RecipeDetailDrink from '../../Components/RecipeDetailDrink';

const DrinkDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container-over">
      <div className="container-int">
        {/* <Header title="Detalhe da bebida" /> */}
        {/* <RecipeDetailDrink /> */}
        <DetailScreen page="bebidas" id={ id } />
      </div>
    </div>
  );
};

export default DrinkDetailPage;
