import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/chocookie.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cookieapp__navbar">
      <div className="cookieapp__navbar-links">
        <div className="cookieapp__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="cookieapp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#todaystreats">Today&apos;s Treats!</a></p>
          <p><a href="#recipe">Famous Recipe</a></p>
          <p><a href="#possibility">Vegan</a></p>
          <p><a href="#blog">Cookie Culture</a></p>
        </div>
      </div>
      <div className="cookieapp__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="cookieapp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cookieapp__navbar-menu_container scale-up-center">
          <div className="cookieapp__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#todaystreats">Today&apos;s Treats!</a></p>
            <p><a href="#recipe">Famous Recipe</a></p>
            <p><a href="#possibility">Vegan</a></p>
            <p><a href="#blog">Cookie Culture</a></p>
          </div>
          <div className="cookieapp__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
