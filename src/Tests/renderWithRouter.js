import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

function renderWithRouter(component) {
  const history = createMemoryHistory();
  return ({
    ...render(
      <TestComponent>
        <Router history={ history }>{ component }</Router>
      </TestComponent>,
    ),
    history,
  });
}

export default renderWithRouter;
