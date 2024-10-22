import './styles/system/main.scss';
// === END OF STYLES ===

import Navbar from './templates/navbar';
import LandingPage from './views/landingPage';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
// === END OF IMPORTS ===



function App({ DEVMODE }) {
  const [selectedLanguage, setSelectedLanguage] = useState({});
  const [languageCode, setLanguageCode] = useState(Cookies.get('language') || 'cz'); // Load from cookie or default to 'cz'

  if (DEVMODE) {
    import('./styles/system/debug.scss');
  }

  // Load the language JSON file based on languageCode
  const loadLanguage = async (code) => {
    try {
      const response = await fetch(`./locales/${code}.json`);
      const languageData = await response.json();
      setSelectedLanguage(languageData);
    } catch (error) {
      console.error("Error loading language file:", error);
    }
  };

  // Change language and load the respective JSON file
  const changeLanguage = (code) => {
    setLanguageCode(code);
    Cookies.set('language', code, { expires: 365 });
    loadLanguage(code);
  };

  // Load the initial language on mount
  useEffect(() => {
    loadLanguage(languageCode);
  }, []); // Run once on mount

  return (
    <>
      <Navbar stringObject={selectedLanguage.Navbar || {}} changeLanguage={changeLanguage} />
      <LandingPage stringObject={selectedLanguage.LandingPage || {}} />
    </>
  );
}

export default App;
