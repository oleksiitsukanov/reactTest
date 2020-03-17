import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/media">Media</NavLink></div>
    </nav>
  );
};

export default Navbar;