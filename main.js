const moveSet = [
  "Rock",
  "Paper",
  "Scissors"
];

const randomNumber = Math.floor(Math.random()*moveSet.length);

console.log("Play Rock Paper Scissors! Please type in Rock, Paper or Scissors whenever you're ready")

function play() {
  enemyMove();
}

function enemyMove() {
  const move = window.prompt("Your Move: ");
  if(move == "Rock" || move == "rock") {
    if(moveSet[randomNumber] == "Rock") {
      document.getElementById("enemyMove").innerHTML = "Rock!";
      document.getElementById("gameStatus").innerHTML = "Tie!";
      document.getElementById("gameStatus").style.color = "white";
    }
    if(moveSet[randomNumber] == "Paper") {
      document.getElementById("enemyMove").innerHTML = "Paper!";
      document.getElementById("gameStatus").innerHTML = "Lost!";
      document.getElementById("gameStatus").style.color = "red";
    }
    if(moveSet[randomNumber] == "Scissors") {
      document.getElementById("enemyMove").innerHTML = "Scissors!";
      document.getElementById("gameStatus").innerHTML = "Win!";
      document.getElementById("gameStatus").style.color = "green";
    }
  }
  if(move == "Paper" || move == "paper") {
    if(moveSet[randomNumber] == "Rock") {
      document.getElementById("enemyMove").innerHTML = "Rock!";
      document.getElementById("gameStatus").innerHTML = "Win!";
      document.getElementById("gameStatus").style.color = "green";
    }
    if(moveSet[randomNumber] == "Paper") {
      document.getElementById("enemyMove").innerHTML = "Paper!";
      document.getElementById("gameStatus").innerHTML = "Tie!";
      document.getElementById("gameStatus").style.color = "white";
    }
    if(moveSet[randomNumber] == "Scissors") {
      document.getElementById("enemyMove").innerHTML = "Scissors!";
      document.getElementById("gameStatus").innerHTML = "Lost!";
      document.getElementById("gameStatus").style.color = "red";
    }
  }
  if(move == "Scissors" || move == "scissors") {
    if(moveSet[randomNumber] == "Rock") {
      document.getElementById("enemyMove").innerHTML = "Rock!";
      document.getElementById("gameStatus").innerHTML = "Lost!";
      document.getElementById("gameStatus").style.color = "red";
    }
    if(moveSet[randomNumber] == "Paper") {
      cdocument.getElementById("enemyMove").innerHTML = "Paper!";
      document.getElementById("gameStatus").innerHTML = "Win!";
      document.getElementById("gameStatus").style.color = "green";
    }
    if(moveSet[randomNumber] == "Scissors") {
      document.getElementById("enemyMove").innerHTML = "Scissors!";
      document.getElementById("gameStatus").innerHTML = "Tie!";
      document.getElementById("gameStatus").style.color = "white";
    }
  }
}

