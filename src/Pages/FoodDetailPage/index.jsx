import React from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import DetailScreen from '../../Components/DetailScreen';
// import RecipeDetail from '../../Components/RecipeDetail';

const FoodDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container-over">
      <div className="container-int">
        {/* <Header title="Detalhe da bebida" /> */}
        {/* <RecipeDetailDrink /> */}
        <DetailScreen page="comidas" id={ id } />
      </div>
    </div>
  );
};

export default FoodDetailPage;
