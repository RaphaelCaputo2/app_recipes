import React, { useState, useEffect, useContext } from 'react';
import { Animated } from 'react-animated-css';
import { useHistory } from 'react-router';
import RecipeContext from '../../Context/RecipeContext';
import { verifyLogin, saveTokens } from '../../helper/loginHelper';
import '../../App.css';
import ImageBack from '../../images/bgc1.svg';

const LoginForm = () => {
  const [userEmail, setEmail] = useState('');
  const [userPass, setPass] = useState('');
  const [statusButton, setStatusButton] = useState(true);
  const { dispatch } = useContext(RecipeContext);
  const history = useHistory();

  useEffect(() => {
    if (verifyLogin(userEmail, userPass)) {
      setStatusButton(false);
    } else {
      setStatusButton(true);
    }
  }, [userEmail, userPass]);

  return (
    <div className="container-form-login">
      <div className="container-login-int">
        <Animated
          animationIn="bounceInLeft"
          isVisible
          animationInDuration={ 2000 }
          className="form-login"
        >
          <form action="" className="form-login">
            <h1 className="title-login">Bem-vindo</h1>
            <input
              type="email"
              name="userEmail"
              value={ userEmail }
              data-testid="email-input"
              onChange={ ({ target }) => setEmail(target.value) }
              className="input"
              placeholder="exemplo@exemplo.com"
            />

            <input
              type="password"
              name="userPass"
              value={ userPass }
              data-testid="password-input"
              onChange={ ({ target }) => setPass(target.value) }
              className="input"
              placeholder="senha"
            />

            <button
              className="btn-login"
              type="button"
              data-testid="login-submit-btn"
              disabled={ statusButton }
              onClick={ () => {
                saveTokens();
                dispatch({ type: 'SET_USER', userEmail });
                history.push('/comidas');
              } }
            >
              Entrar
            </button>
          </form>
        </Animated>
      </div>
      <div className="image-login">
        <Animated
          animationIn="bounceInRight"
          isVisible
          animationInDuration={ 2000 }
        >
          <img src={ ImageBack } alt="login-side" />
        </Animated>
      </div>
    </div>
  );
};

export default LoginForm;
