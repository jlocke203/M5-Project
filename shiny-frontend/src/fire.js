import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBkBPT4--nUThem7M6bsBxpqUuEblSsK6A",
    authDomain: "coolio-34d33.firebaseapp.com",
    databaseURL: "https://coolio-34d33.firebaseio.com",
    projectId: "coolio-34d33",
    storageBucket: "coolio-34d33.appspot.com",
    messagingSenderId: "471499855470",
    appId: "1:471499855470:web:8498682de42a5d453fb87f"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire 