import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import Footer from '../../Components/Footer';
import ExplorerFoodArea from '../../Components/ExplorerFoodArea';

const FoodArea = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Explorar Origem" />
      <ExplorerFoodArea />
      <Footer />
    </div>
  </div>
);

export default FoodArea;
