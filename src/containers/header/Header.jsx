import React from 'react';
import people from '../../assets/people.png';
import cookies from '../../assets/cookies.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Cookies have been eaten by humans for thousands of years</h1>
      <p>From Oreos and Classic Chocolate Chip to Oatmeal Raisan and Peanutbutter - there is a cookie for everyone and every occasion.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join Cookie Community</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>80+ people confirmed they love cookies in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={cookies} />
    </div>
  </div>
);

export default Header;
