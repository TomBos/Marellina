import './styles/system/main.scss';
// === END OF STYLES ===

import Navbar from './templates/navbar';
import React, { useState, useEffect } from 'react';
// === END OF IMPORTS ===



function App({ DEVMODE }) {
  const [selectedLanguage, setSelectedLanguage] = useState({});
  const [languageCode, setLanguageCode] = useState('cz'); // Default language code

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
    loadLanguage(code);
  };

  // Load the initial language on mount
  useEffect(() => {
    loadLanguage(languageCode);
  }, []); // Run once on mount

  return (
    <>
      <Navbar stringObject={selectedLanguage.Navbar || {}} changeLanguage={changeLanguage} />
    </>
  );
}

export default App;
