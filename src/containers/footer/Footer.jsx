import React from 'react';
import chocookie from '../../assets/chocookie.png';
import './footer.css';

const ranCookieClick = (recipeSet) => `https://online.fliphtml5.com/xlry/lkkt/#p=${recipeSet[Math.floor(Math.random() * recipeSet.length)]}`;

const Footer = () => (
  <div className="cookieapp__footer section__padding">
    <div className="cookieapp__footer-heading">
      <h1 className="gradient__text">Cookies will always be there.</h1>
    </div>

    <div className="cookieapp__footer-btn">
      <p><a href={ranCookieClick([6, 8, 12, 14, 18, 20, 22, 24, 28, 30, 34, 36, 42, 43, 48, 50, 54, 56])} target="_blank" rel="noopeneer noreferrer">Show me a random cookie</a></p>
    </div>

    <div className="cookieapp__footer-links">
      <div className="cookieapp__footer-links_chocookie">
        <img src={chocookie} alt="cookieapp_chocookie" />
        <p>Caden Roberts 2023 cookie project 🌬<span>&#x1F36A;</span></p>
      </div>
      <div className="cookieapp__footer-links_div">
        <h4>Super Indulgent</h4>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=54" target="_blank" rel="noopener noreferrer"><p>Pan Sprinkle Sugar Cookie</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=56" target="_blank" rel="noopener noreferrer"><p>Chocolate Pecan Skillet Cookie</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=36" target="_blank" rel="noopener noreferrer"><p>Chocolate Bourbon Peanut Cookies</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=28" target="_blank" rel="noopener noreferrer"><p>Strawberry and Rosemary Shortbread</p></a>
      </div>
      <div className="cookieapp__footer-links_div">
        <h4>Very Indulgent</h4>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=30" target="_blank" rel="noopener noreferrer"><p>Sea Salt Carmelized White Chocolate Sablés </p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=22" target="_blank" rel="noopener noreferrer"><p>Finnish Pinwheel Cookies</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=50" target="_blank" rel="noopener noreferrer"><p>Ginger Bombs</p></a>
      </div>
      <div className="cookieapp__footer-links_div">
        <h4>Indulgent</h4>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=48" target="_blank" rel="noopener noreferrer"><p>Roasted Blood Orange Hazelnut Biscotti</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=25" target="_blank" rel="noopener noreferrer"><p>Lemon Curd Filling Lavender Sandwhich Cookies</p></a>
        <a href="https://online.fliphtml5.com/xlry/lkkt/#p=42" target="_blank" rel="noopener noreferrer"><p>Chocolate Peppermint | Cookies and Cream Drop Cookies</p></a>
      </div>
    </div>

    <div className="cookieapp__footer-copyright">
      <p>@2023 Cookie. All <span>&#x1F36A;</span>&apos;s reserved.</p>
    </div>
  </div>
);

export default Footer;
