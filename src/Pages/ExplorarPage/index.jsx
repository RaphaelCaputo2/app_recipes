import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import iconDrink from '../../images/drinkIcon.svg';
import iconMeals from '../../images/mealIcon.svg';
import '../../App.css';
import './style.css';

const Explorar = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Explorar" />
      <div className="container-options">
        <Link to="/explorar/comidas" data-testid="explore-food" className="link">
          Explorar Comidas
          <img src={ iconMeals } alt="Icone explorar comidas" />
        </Link>
        <Link to="/explorar/bebidas" data-testid="explore-drinks" className="link">
          Explorar Bebidas
          <img src={ iconDrink } alt="Icone de explorar bebidas" />
        </Link>
      </div>
      <Footer />
    </div>
  </div>
);

export default Explorar;
