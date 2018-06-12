
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
var ties = 0;
var currentNumPlayers = 0;
var gameUrl = "https://rps-multiplayer-f26ec.firebaseio.com";

$(document).ready(function () {

  $("#start-button").on("click", function () {
    var database = firebase.database();
    playerId = $("#player-name").val().trim();
    database.ref().set({
      player1: playerId
    });
    currentNumPlayers++;
    checkNumPlayers();
    console.log(currentNumPlayers);
  })

  function checkNumPlayers() {
    if (currentNumPlayers >= numPlayers) {
      alert("game full");
      startGame();
    }
  }
  function startGame() {
    alert("ready");
  }
});