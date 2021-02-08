import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import Footer from '../../Components/Footer';
import Explorer from '../../Components/Explorer';

const DrinkExplore = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Explorar Bebidas" />
      <Explorer />
      <Footer />
    </div>
  </div>
);

export default DrinkExplore;
