// task-3.js

// Function to play Rock–Paper–Scissors
function playRPS(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    return `Draw! Both chose ${userChoice}`;
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You Win! Computer chose ${computerChoice}`;
  } else {
    return `You Lose! Computer chose ${computerChoice}`;
  }
}

// Example usage:
console.log(playRPS("rock"));
console.log(playRPS("paper"));
console.log(playRPS("scissors"));
