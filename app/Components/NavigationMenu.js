'use client'
import React, { useState, useEffect } from 'react';
import './style.css';

const NavigationMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode && mode === 'dark-mode') {
      setDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('mode', darkMode ? 'light-mode' : 'dark-mode');
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleBodyClick = (e) => {
    const clickedElm = e.target;
    if (!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')) {
      setSidebarActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <nav>
      <div className={`nav-bar ${sidebarActive ? 'active' : ''}`}>
        <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
        <span className="logo navLogo"><a href="#">CodingLab</a></span>

        <div className="menu">
          <div className="logo-toggle">
            <span className="logo"><a href="#">CodingLab</a></span>
            <i className='bx bx-x siderbarClose' onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="darkLight-searchBox">
          <div className="dark-light" onClick={toggleMode}>
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </div>

          <div className="searchBox">
            <div className="searchToggle" onClick={toggleSearch}>
              <i className='bx bx-x cancel'></i>
              <i className='bx bx-search search'></i>
            </div>

            <div className={`search-field ${searchActive ? 'active' : ''}`}>
              <input type="text" placeholder="Search..." />
              <i className='bx bx-search'></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavigationMenu;