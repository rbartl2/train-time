// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyBtl-4ABkUyvur6ReXllCNGTDGqYHM3abI",
    authDomain: "train-time-337eb.firebaseapp.com",
    databaseURL: "https://train-time-337eb.firebaseio.com",
    projectId: "train-time-337eb",
    storageBucket: "train-time-337eb.appspot.com",
    messagingSenderId: "873244974710",
    appId: "1:873244974710:web:0d9ac58094fbc5b0"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Create a variable reference to the database
  var database = firebase.database();