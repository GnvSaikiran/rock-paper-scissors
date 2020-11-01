// returns a random option based on the random number generated between 0 to 2
function computerPlay() {
  const OPTIONS = ["Rock", "Paper", "Scissor"];
  let random = Math.floor(Math.random() * 3);
  return OPTIONS[random];
}

// returns the winner of each round
function playRound(playerSelection) {
  let result = document.getElementById('info');
  result.style.fontSize = "20px";

  let computerScore = document.getElementById('computer-score');
  let playerScore = document.getElementById('player-score');

  let computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    result.textContent = 'Draw'
    console.log(`Draw`);
    return;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Rock")
  ) {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent++;
    console.log(
      `You Lose! ${computerSelection} beats ${playerSelection}`
    );
    if (computerScore.textContent === 5) {
      result.textContent = "Computer Won"
      result.style.fontSize = "40px";
      computerScore.textContent = 0;
      playerScore.textContent = 0;
      return;
    }
    return "computer";
  } else {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    if (playerScore.textContent === 5) {
      result.textContent = "Player Won"
      result.style.fontSize = "40px";
      computerScore.textContent = 0;
      playerScore.textContent = 0;
      return;
    }
    return "player";
  }
}

let rounds = 0;

document.getElementById('rock-button').addEventListener('click',
  () => playRound('Rock'));

document.getElementById('paper-button').addEventListener('click',
  () => playRound('Paper'));

document.getElementById('scissor-button').addEventListener('click',
  () => playRound('Scissor'));