import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavbarFreands from './NavbarFreands/NavbarFreands';


const Navbar = (props) => {
  return (
    <nav className={s.navigation}>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
      <div className={s.navigation_item}><NavLink activeClassName={s.active} to="/media">Media</NavLink></div>
      <NavbarFreands state={props.state} />
    </nav>
  );
};

export default Navbar;