import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './footer.css';
import '../../App.css';

const Footer = () => (
  <div className="container-int">
    <div className="footer_css" data-testid="footer">
      <Link to="/bebidas">
        <button type="button" className="btn-navigation">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="Drink Icon"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button type="button" className="btn-navigation">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="Explore Icon"
          />
        </button>
      </Link>
      <Link to="/comidas">
        <button type="button" className="btn-navigation">
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="Meal Icon"
          />
        </button>
      </Link>
    </div>
  </div>
);
export default Footer;
