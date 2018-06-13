
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
var playerId = "";
var numPlayers = 2;
var player1wins = 0;
var player2wins = 0;
var player1losses = 0;
var player2losses = 0;
var ties = 0;
var currentNumPlayers = 0;
var gameUrl = "https://rps-multiplayer-f26ec.firebaseio.com";

$(document).ready(function () {
  var database = firebase.database();

  $("#start-button").on("click", function () {
    if (currentNumPlayers === 0) {
      database = firebase.database();
      playerId = $("#player-name").val().trim();
      database.ref().update({
        players: {
          1: {
            player1: playerId,
          }
        }
      });
      $("#player-1").text("Player 1: " + playerId.toUpperCase());
      currentNumPlayers++;
      checkNumPlayers();
      console.log(currentNumPlayers);
    }
    else {
      database = firebase.database();
      playerId = $("#player-name").val().trim();
      database.ref().update({
        players: {
          2: {
            player2: playerId,
          }
        }
      });
      $("#player-2").text("Player 2: " + playerId.toLocaleUpperCase());
      currentNumPlayers++;
      checkNumPlayers();
      console.log(currentNumPlayers);
    }
  })

  $("#chat-button").on("click", function () {
    database = firebase.database();
    var chatText = $("#chat-input").val().trim();
    database.ref().set({
      chat: chatText
    });
  })

  database.ref().on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().chat);

    // full list of items to the well
    $("#message-display").append(childSnapshot.val().chat);

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  function checkNumPlayers() {
    if (currentNumPlayers === numPlayers) {
      alert("game full");
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