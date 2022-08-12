import React from 'react';
import ThemeContext from './Tutorial/DarkMode/context/ThemeContext';
import HeroSection from './Tutorial/DarkMode/components/HeroSection';
import Header from './Tutorial/DarkMode/components/Header';
import { useState } from 'react';

const App = () => {
  const themeHook = useState('dark');
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  );
};

export default App;
