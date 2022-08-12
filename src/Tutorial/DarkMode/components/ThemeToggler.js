import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function ThemeToggler() {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log('Default value is ', theme, setTheme);
  return (
    <div
      style={{
        width: '100vw',
        textAlign: 'center',
      }}
    >
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        {theme === 'light' ? 'dark ' : 'light '}mode
      </button>
    </div>
  );
}

export default ThemeToggler;
