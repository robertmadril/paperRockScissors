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

  var player1 = false;
  var player2 = false;


  $(".submit-btn").on("click", function(event){
      event.preventDefault();
      var name = $("#name-input").val().trim();
      console.log(name);

      if(player1 && !player2) {
        var p2Object = {
            playerName: name,
            wins: 0,
            losses: 0,
            ties: 0
        }
        database.ref().push(p2Object);
        player2 = true;
        $("#form-display").css("display", "none");

    }

      if(!player1 && !player2) {
        var p1Object = {
            playerName: name,
            wins: 0,
            losses: 0,
            ties: 0
        }

        database.ref().push(p1Object);
        player1 = true;
      } 

  })

  $(".p1").on("click", function(){

    var choice1 = $(this).attr("data-value");
    console.log(choice1);
    //value sent to database (ntk how to select first or second child)
    //option appears for p2
  })

  $(".p2").on("click", function(event){
    var choice2 = $(this).attr("data-value");
    console.log(choice2);
    //value sent to database (ntk how to select first or second child)
    //game winner function
})

function winCheck() {
    //conditionals to check winner
    //display winner
    //new game in 5 seconds
}


  /*

  They will only have access to one player side.
  If player disconnects, 

  */