import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDqY3rnV0dMEv8LBFxOurJ69ux-Hp7zCwc",
  authDomain: "reservi-d1ur1.firebaseapp.com",
  databaseURL: "https://reservi-d1ur1.firebaseio.com",
  projectId: "reservi-d1ur1",
  storageBucket: "reservi-d1ur1.appspot.com",
  messagingSenderId: "645064296842"
};


firebase.initializeApp(config);

export default firebase;