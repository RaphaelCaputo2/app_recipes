import React from 'react';
import Header from '../../Components/Header';
import '../../App.css';
import UserProfile from '../../Components/UserProfile';
import LogoutButton from '../../Components/Logout';
import Footer from '../../Components/Footer';

const Perfil = () => (
  <div className="container-over">
    <div className="container-int">
      <Header title="Perfil" />
      <div className="container-buttons-profile">
        <UserProfile />
        <LogoutButton />
      </div>
      <Footer />
    </div>
  </div>
);

export default Perfil;
