import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCZmw9t-VfkOmvj1EF8aH3dbs479nVFzqw',
  authDomain: 'bet-app-2507.firebaseapp.com',
  databaseURL: 'https://bet-app-2507.firebaseio.com',
  projectId: 'bet-app-2507',
  storageBucket: 'bet-app-2507.appspot.com',
  messagingSenderId: '448279984350',
  appId: '1:448279984350:web:4656fd7056814a68e2aa4f'
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
