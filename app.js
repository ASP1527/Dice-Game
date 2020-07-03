var imageUrls = [
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face1.jpg",
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face2.jpg",
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face3.jpg",
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face4.jpg",
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face5.jpg",
  "https://thefiveplanets.org/b01/data/graphics/textures/dice/face6.jpg",
];

var playerNumber = 1;
var computerNumber = 1;

let winner = document.getElementById("box");
var playerWins = "Player Wins";
var computerWins = "Computer Wins";
var tie = "Tie";

function roll() {
  let dice = document.getElementById("die");
  var playerNumber = Math.floor(Math.random() * 6);
  dice.src = imageUrls[playerNumber];

  let computerDice = document.getElementById("computer");
  var computerNumber = Math.floor(Math.random() * 6);
  computerDice.src = imageUrls[computerNumber];

  var playerScore = playerNumber + 1;
  var computerScore = computerNumber + 1;

  if (playerScore > computerScore) {
    winner.innerHTML = playerWins;
  }

  if (computerScore > playerScore) {
    winner.innerHTML = computerWins;
  }

  if (computerScore === playerScore) {
    winner.innerHTML = tie;
  }
}
