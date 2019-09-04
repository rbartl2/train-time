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

  // Click function for adding trains and getting user input
  $('#submit').on('click', function(){

    var trainName = $('#train-name').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = moment($('#first-train-time').val().trim(), "HH:mm").format("X");
    var frequency = $('#frequency').val().trim();
  })

  // Create "temporary" object for holding train data
  var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrainTime,
      frequency: frequency,
  };

  // Pushes train data to the database
  database.ref().push(newTrain);

  // Clear the text boxes
  $('#train-name').val("");
  $('#destination-input').val("");
  $('#first-train-time').val("");
  $('#frequency').val("");