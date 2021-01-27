import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlTcXEuJp0rspp8LopRRgIE8qLZ4IcFas',
  authDomain: 'novi-front-end.firebaseapp.com',
  projectId: 'novi-front-end',
  storageBucket: 'novi-front-end.appspot.com',
  messagingSenderId: '848754240244',
  appId: '1:848754240244:web:cc3af422c6c9eb84dc4ca1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
