import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MainScreen from '../../Components/MainScreen';

import '../../App.css';

const Drink = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Bebidas" />
      <MainScreen page="bebidas" />
      <Footer />
    </div>
  </div>
);

export default Drink;
