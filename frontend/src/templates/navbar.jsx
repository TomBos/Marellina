import '../../public/styles/public/landingPage.css';
import '../../public/styles/public/navbar.css';
// === END OF STYLES ===
import React, {useState} from 'react';
import {UilArrowRight} from '@iconscout/react-unicons'
// === END OF IMPORTS ===


const Navbar = ({ stringObject, changeLanguage }) => {
  const {Contact, Navigation, Products, Home} = stringObject;
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
              {Navigation} <UilArrowRight size="16" className={`pointer ${isNavHidden ? 'pointer-down' : 'pointer-up' }`}/>
            </span>
          </button>
        </div>

        <ul id='navigation'  className={`${isNavHidden ? 'hidden' : ''}`}>
          <li>{Home}</li>
          <li>Cart</li>
          <li href="/products">{Products}</li>
          <li href="#contact">{Contact}</li>

          <button className='btn' onClick={() => changeLanguage('1')}>CZ</button>
          <button className='btn' onClick={() => changeLanguage('2')}>EN</button>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
