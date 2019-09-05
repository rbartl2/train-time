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
    var destination = $('#destination-input').val().trim();
    var firstTrain = moment($('#first-train-time').val().trim(), "HH:mm").format("X");
    var frequency = $('#frequency').val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);
  

  // Create "temporary" object for holding train data
  // Push to database
  var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      // dateAdded: firebase.database.ServerValue.TIMESTAMP
  };
  
  // Pushes train data to the database
  database.ref().push(newTrain);

  // Clear the text boxes
  $('#train-name').val("");
  $('#destination-input').val("");
  $('#first-train-time').val("");
  $('#frequency').val("");

});

// Firebase event for adding train to the database and adding row in the html

database.ref().on('child_added', function(childSnapshot){
  console.log(childSnapshot.val());
  // Store everything into a variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;

  // Current time
  var currentTime = moment();
  
  // Difference between the times
  var diffTime = moment().diff(moment.unix(firstTrain), "minutes");
  // Time apart (remainder)
  var remainder = diffTime % frequency;
  // Minutes until train
  var minutes = frequency - remainder;
  // Next train
  var nextTrain = moment().add(minutes, 'minutes');
  var nextTrainFormat = moment(nextTrain).format('HH:mm');


  console.log(moment().format('HH:mm'));
  console.log(nextTrainFormat);
  console.log(minutes);

  var newRow = $('<tr>').append(
    $('<td>').text(trainName),
    $('<td>').text(destination),
    $('<td>').text(frequency),
    $('<td>').text(nextTrainFormat),
    $('<td>').text(minutes),
  );

  $('.table > tbody').append(newRow);

})
