  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRkmxXbCcKzs7Ui4-ISHZb1h4sJFX9vY4",
    authDomain: "rmm-rockpaperscissors.firebaseapp.com",
    databaseURL: "https://rmm-rockpaperscissors.firebaseio.com",
    projectId: "rmm-rockpaperscissors",
    storageBucket: "",
    messagingSenderId: "1021610571103"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  /*

  Both players join by inputting the name in their field.
  They will only have access to one player side.
  when player-one class on.click's the value will be sent to db. p2 will not see selection.
  when player-two class on.click's the value will be sent to db and winner will display.
  New game will start when both p1 and p2 have selected new game

  */