// External Dependencies
import firebase from 'firebase';
import apiKey from './apiKey'

var config = {
  apiKey: apiKey,
  authDomain: "gamesandkeys-webapp.firebaseapp.com",
  databaseURL: "https://gamesandkeys-webapp.firebaseio.com",
  projectId: "gamesandkeys-webapp",
  storageBucket: "",
  messagingSenderId: "795840140448"
};
firebase.initializeApp(config);

export default firebase;