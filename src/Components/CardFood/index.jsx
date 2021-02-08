import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardFood = (props) => {
  const { thumb, foodName, index, page, idFood } = props;
  return (
    <Link to={ `/${page}/${idFood}` }>
      <div data-testid={ `${index}-recipe-card` } className="cards-food foodCard">
        <img data-testid={ `${index}-card-img` } src={ thumb } alt={ foodName } />
        <p data-testid={ `${index}-card-name` }>{foodName}</p>
      </div>
    </Link>
  );
};

export default CardFood;

CardFood.propTypes = {
  page: PropTypes.string.isRequired,
  idFood: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
