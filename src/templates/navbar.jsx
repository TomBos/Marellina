import '../styles/public/landingPage.scss';
import '../styles/public/navbar.scss';
// === END OF STYLES ===

import React, { useState, useEffect } from 'react';
import { UilArrowRight } from '@iconscout/react-unicons'
// === END OF IMPORTS ===


const Navbar = ({ stringObject, changeLanguage }) => {
  const [isNavHidden, setIsNavHidden] = useState(true);

  const changeNavBarState = () => {
    setIsNavHidden(!isNavHidden);
  };

  return (
    <>
      <nav id="navbar">
        <div className='nav'>
          <img src="images/logo.jpg" alt="placeholder" />
          <button onClick={() => changeNavBarState()} className='btn' id="menuButton">
            <span className='btn-content-nav'>
              {stringObject.Navigation} <UilArrowRight size="16" className={`pointer ${isNavHidden ? 'pointer-down' : 'pointer-up' }`}/>
            </span>
          </button>
        </div>

        <ul id='navigation'  className={`${isNavHidden ? 'hidden' : ''}`}>
          <li href="#home">{stringObject.Home}</li>
          <li href="#order">{stringObject.Order}</li>
          <li href="#products">{stringObject.Products}</li>
          <li href="#contact">{stringObject.Contact}</li>

          <button className='btn' onClick={() => changeLanguage('cz')}>CZ</button>
          <button className='btn' onClick={() => changeLanguage('en')}>EN</button>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
