import React, { useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import RecipeContext from './Context/RecipeContext';
import reducer from './Context/reducer';
import initialState from './Context/initialState';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecipeContext.Provider value={ { state, dispatch } }>
      <Routes />
    </RecipeContext.Provider>
  );
}

export default App;
