const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0
};

// Play game
function play(e) {
  //console.log(e.target.id);
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  //console.log(playerChoice, computerChoice, winner);
  showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get winner between player & computer
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      // paper beats rock so computer wins
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// Show winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // Increase player score
    scoreboard.player++;
    // Show modal result, upper case the first letter of what the computer
    // chose then add rest of the words in the splice() method
    result.innerHTML = `<h1 class="text-win">You won</h1>
        <i class="fas fa-hand-${computerChoice}
        fa-10x>"</i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1)}</strong>
        `;
  } else if (winner === "computer") {
    // Increase computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `<h1 class="text-lose">You lost</h1>
    <i class="fas fa-hand-${computerChoice}
    fa-10x>"</i>
    <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong>
    `;
  } else {
    result.innerHTML = `<h1>It is a draw</h1>
    <i class="fas fa-hand-${computerChoice}
    fa-10x>"</i>
    <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong>
    `;
  }

  // Show score
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;
  modal.style.display = "block";
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
