import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecomendationCard = (props) => {
  const { thumb, foodName, index, page, idFood } = props;
  return (
    <Link to={ `/${page}/${idFood}` }>
      <div data-testid={ `${index}-recomendation-card` } className="recomendation-card">
        <img data-testid={ `${index}-card-img` } src={ thumb } alt={ foodName } />
        <p data-testid={ `${index}-recomendation-title` }>{foodName}</p>
      </div>
    </Link>
  );
};

export default RecomendationCard;

RecomendationCard.propTypes = {
  page: PropTypes.string.isRequired,
  idFood: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
