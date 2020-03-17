import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className={s.navigation}>
        <div className={`${s.navigation_item} ${s.active}`}><a href="#">Home</a></div>
        <div className={s.navigation_item}><a href="#">Forum</a></div>
        <div className={s.navigation_item}><a href="#">Promo</a></div>
        <div className={s.navigation_item}><a href="#">Contacts</a></div>
      </nav>
  );
};

export default Navbar;