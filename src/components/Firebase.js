import * as firebase from 'firebase'
let database;
// Initialize Firebase
let config = {
  apiKey: "AIzaSyDqCxq-wOuTHqc0Ob7lpymkK26qaaKIpZY",
  authDomain: "command-react.firebaseapp.com",
  databaseURL: "https://command-react.firebaseio.com",
  projectId: "command-react",
  storageBucket: "command-react.appspot.com",
  messagingSenderId: "590203062986"
};
export const fire = () => {
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  database = firebase.database()
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}

export const setFireDB = (title, comment) => {
  firebase.database().ref('/').push({
    title: title,
    comment: comment
  })
}
