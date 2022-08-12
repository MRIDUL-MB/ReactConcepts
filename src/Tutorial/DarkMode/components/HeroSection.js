import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Colors';

function HeroSection() {
  const theme = useContext(ThemeContext)[0];
  console.log(theme);
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        width: '100vw',
        height: '50vh',
        display: 'flex',
        justfyContent: 'center',
        flexDirection: 'column',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        border: currentTheme.border,
      }}
    >
      <h1>Dark Mode</h1>
      <p>Click on Toggle button on the top of this page to see the magic.</p>
    </div>
  );
}

export default HeroSection;
