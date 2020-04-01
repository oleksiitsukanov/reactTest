import React from 'react';
import s from './Preloader.module.css';
import loader from '../../../img/loader.svg'

let Preloader = (props) => {
  return <div className={s.loader}><img src={loader}/></div>
}

export default Preloader;