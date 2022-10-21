const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "ERROR. The only accepted values are: 'rock', 'paper' or 'scissors'"
    );
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// console.log(getComputerChoice());

//  let randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     console.log('rock');
//   } else if (randomNumber === 1) {
//     console.log('paper');
//   } else {
//     console.log('scissors');
//   };

//   console.log(randomNumber);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tie! try again!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "CPU WINS!";
    } else {
      return "HUMANOID FTW!!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "CPU WINS!";
    } else {
      return "HUMANOID FTW!!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "CPU WINS!";
    } else {
      return "HUMANOID FTW!!";
    }
  }
  if (userChoice === 'bomb') {
    return "Congratulations, you win, HUMAN!"
  }
};

/*
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
*/

const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log("HUMANOID drawed: " + userChoice);
  console.log("CPU drawed: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
