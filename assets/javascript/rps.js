
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwNI0v7FDNPuzhibpNnSTSOJKatGSkLEs",
  authDomain: "rps-multiplayer-ba423.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-ba423.firebaseio.com",
  projectId: "rps-multiplayer-ba423",
  storageBucket: "",
  messagingSenderId: "798644746918"
};
firebase.initializeApp(config);

// Variables
var playerId = "";
var numPlayers = 2;
var player1wins = 0;
var player2wins = 0;
var ties = 0;
var gameUrl = "https://rps-multiplayer-ba423.firebaseio.com";

$(document).ready(function () {
  $("button").on("click", function () {
    playerId = $("#player-name").val().trim();
  })
  
})