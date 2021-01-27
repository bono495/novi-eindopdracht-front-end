import React from 'react';
import { Link } from 'react-router-dom';

import style from './Lost.module.scss';

import LostImage from '../../assets/lost.gif';

function Lost() {
  return (
    <div className={style.lost}>
      <h2 className={style.title}>U bent waarschijnlijk verdwaald.</h2>
      <div className={style.image}>
        <img src={LostImage} alt="wall-e in space" />
      </div>
      <div className={style.homeButton}>
        <Link to="home"><h3>Terug naar Home</h3></Link>
      </div>
    </div>
  );
}

export default Lost;
