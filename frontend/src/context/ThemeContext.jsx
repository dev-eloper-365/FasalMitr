import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update document class and CSS variables
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--primary-color', '#0a4d0c');
      document.documentElement.style.setProperty('--secondary-color', '#8aa822');
      document.documentElement.style.setProperty('--background-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#f5f5f5');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--primary-color', '#107813');
      document.documentElement.style.setProperty('--secondary-color', '#afcd2a');
      document.documentElement.style.setProperty('--background-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#333333');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 