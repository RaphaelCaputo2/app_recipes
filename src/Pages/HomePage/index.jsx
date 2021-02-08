import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MainScreen from '../../Components/MainScreen';

import '../../App.css';

const Home = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Comidas" />
      <MainScreen page="comidas" />
      <Footer />
    </div>
  </div>
);

export default Home;
