$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaluwB-Ti4pMYbQi_5GP9P7WQar3gwEjg",
    authDomain: "rps-multiplayer-f26ec.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-f26ec.firebaseio.com",
    projectId: "rps-multiplayer-f26ec",
    storageBucket: "",
    messagingSenderId: "912188291755"
  };
  firebase.initializeApp(config);


  // Variables
  var playerId1 = "";
  var playerId2 = "";
  var numPlayers = 2;
  var player1wins = 0;
  var player2wins = 0;
  var player1losses = 0;
  var player2losses = 0;
  var ties = 0;
  var currentNumPlayers = 0;
  
  var gameUrl = "https://rps-multiplayer-f26ec.firebaseio.com";

  //Firebase database call
  var database = firebase.database();

  $("#start-button").on("click", function () {

    if (currentNumPlayers === 0) {
      database = firebase.database();
      playerId1 = $("#player-name").val().trim();
      database.ref('users/' + playerId1).set({
        wins: 0,
        losses: 0,
        chat: ""
      });
      $("#player-1").text("Player 1: " + playerId1.toUpperCase());
      currentNumPlayers++;
      checkNumPlayers();
      $("form").get(0).reset()
      $("#box-center").html("Waiting for a Second Player...");
    }
    else if (currentNumPlayers === 1) {
      database = firebase.database();
      playerId2 = $("#player-name").val().trim();
      database.ref('users/' + playerId2).set({
        wins: 0,
        losses: 0,
        chat: ""
      });
      $("#player-2").text("Player 2: " + playerId2.toLocaleUpperCase());
      currentNumPlayers++;
      checkNumPlayers();
      $("#box-center").html("LETS GET IT ON!!!");
      $("#start-row").empty();
    }

  })

  $("#chat-button").on("click", function () {
    database = firebase.database();
    var chatText = $("#chat-input").val().trim();
    $("#message-display").html("<h5>" + chatText + "</h5>");
  })

  

  function checkNumPlayers() {
    if (currentNumPlayers === numPlayers) {
      startGamePlayer1();
      startGamePlayer2();
    }
  }
  function startGamePlayer1() {
    $("#box-left").append("<br><h5 id='rock1'>Rock</h5>");
    $("#box-left").append("<br><h5 id='paper1'>Paper</h5>");
    $("#box-left").append("<br><h5 id='scissors1'>Scissors</h5>");
    $("#box-left").append("<br><h6 id='wins-loss-1'>Wins: " + player1wins + " Losses: " + player1losses)

  }
  function startGamePlayer2() {
    $("#box-right").append("<br><h5 id='rock2'>Rock</h5>");
    $("#box-right").append("<br><h5 id='paper2'>Paper</h5>");
    $("#box-right").append("<br><h5 id='scissors2'>Scissors</h5>");
    $("#box-right").append("<br><h6 id='wins-loss-1'>Wins: " + player2wins + " Losses: " + player2losses)
  }
});