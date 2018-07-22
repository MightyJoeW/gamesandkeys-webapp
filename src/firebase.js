// External Dependencies
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDqt3aZWrd0l2YzWmwy1oEMn4mWWPa3I74",
  authDomain: "gamesandkeys-webapp.firebaseapp.com",
  databaseURL: "https://gamesandkeys-webapp.firebaseio.com",
  projectId: "gamesandkeys-webapp",
  storageBucket: "",
  messagingSenderId: "795840140448"
};
firebase.initializeApp(config);

export default firebase;