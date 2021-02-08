import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

const UserProfile = () => {
  const [emailUser, setEmailUser] = useState({});

  useEffect(() => {
    const userRecover = localStorage.getItem('user');
    const user = userRecover === null ? '{ "email": "not user" }' : userRecover;
    setEmailUser(JSON.parse(user));
  }, []);

  return (
    <div className="container-int-body">
      <p className="email-user" data-testid="profile-email">
        {emailUser.email}
      </p>
      <Link to="/receitas-feitas" className="link-profile">
        <button
          type="button"
          className="profile-btn"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas" className="link-profile">
        <button
          type="button"
          className="profile-btn"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
