import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Quote from 'inspirational-quotes';

import firebase from 'firebase';
import style from './Home.module.scss';

import { auth } from '../../firebase';

function Home() {
  const history = useHistory();

  function logout() {
    auth.signOut().then(() => {
      history.push('/login');
    }).catch((error) => {
      console.log(error);
    });

    console.log('user is logged out');
  }

  function deleteAccount() {
    const user = firebase.auth().currentUser;

    user.delete().then(() => {
      history.push('register');
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });

    console.log('user is deleted');
  }

  return (
    <div className={style.home}>
      <h1 className={style.quote}>
        { Quote.getRandomQuote() }
      </h1>
      <div className={style.navigationButtons}>
        <div className={style.registerButton}>
          <Link to="register"><h3>Registreren</h3></Link>
        </div>
        <div className={style.moviesButton}>
          <Link to="movies"><h3>Laatste Films</h3></Link>
        </div>
        <div>
          <button className={style.deleteAccountButton} type="button" onClick={() => deleteAccount()}>Verwijder Account</button>
        </div>
        <div>
          <button className={style.logoutButton} type="button" onClick={() => logout()}>Uitloggen</button>
        </div>
        <div className={style.lostButton}>
          <Link to="niet-bestaande-url"><h3>Enter het doolhof</h3></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
