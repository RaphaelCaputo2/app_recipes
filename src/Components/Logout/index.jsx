import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const LogoutButton = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear('user');
    history.push('/');
  };

  return (
    <button
      type="button"
      className="btn-logout"
      data-testid="profile-logout-btn"
      onClick={ () => logout() }
    >
      Sair
    </button>
  );
};

export default LogoutButton;
