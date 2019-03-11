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