import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import initialState from '../Context/initialState';
import reducer from '../Context/reducer';
import RecipeContext from '../Context/RecipeContext';

const TestComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecipeContext.Provider value={ { state, dispatch } }>
      {children}
    </RecipeContext.Provider>
  );
};

TestComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestComponent;
