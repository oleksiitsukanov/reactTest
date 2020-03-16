import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className={s.navigation}>
        <div className={`${s.navigation_item} ${s.active}`}>Home</div>
        <div className={s.navigation_item}>Forum</div>
        <div className={s.navigation_item}>Promo</div>
        <div className={s.navigation_item}>Contacts</div>
      </nav>
  );
};

export default Navbar;