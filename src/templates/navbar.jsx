import '../styles/public/landingPage.scss';
import '../styles/public/navbar.scss';
// === END OF STYLES ===

import React, { useState, useEffect } from 'react';
// === END OF IMPORTS ===



const Navbar = ({ stringObject, changeLanguage }) => {

  return (
    <>
      <nav id="navbar">
        <img src="images/logo.jpg" alt="placeholder" />
        <button id="menuButton">{stringObject.Navigation}</button>
        <ul id='navigation'>
          <li href="#home">{stringObject.Home}</li>
          <li href="#order">{stringObject.Order}</li>
          <li href="#products">{stringObject.Products}</li>
          <li href="#contact">{stringObject.Contact}</li>
        </ul>
        <ul id='Language'>
            <button onClick={() => changeLanguage('cz')}>CZ</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
