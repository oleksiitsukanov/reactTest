import React from 'react';
import s from './NavbarFreands.module.css';


const NavbarFreands = (props) => {
  return (
    <div className={s.freands}>
      <h3>Freands</h3>
      <div className={s.freandsItems}>
      {props.store.freandsPage.map( mas => {
        return(
          <div className={s.freand}>
            <div className={s.avatar}><img src={mas.avatar} alt=""/></div>
            <div className={s.name}>{mas.name}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default NavbarFreands;