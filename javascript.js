function getComputerChoice() {
    //return rock, paper scissors
    a = Math.random() * 3;
    const randomInt = Math.ceil(a);
    switch (randomInt) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
      default:
        console.error("Switch statement error");
        break;
        return null;
    }
  }
  function capitalize(x) {
    newArray = x.split("");
    newArray[0] = newArray[0].toUpperCase();
    return newArray.join("");
  }

  function evaluateChoice(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
      return "win";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "rock"
    ) {
      return "win";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return "win";
    } else if (playerSelection === computerSelection) {
      return "draw";
    } else {
      return "lose";
    }
  }

  function game() {
    let userScore = 0;
    let computerScore = 0;
    while (userScore < 5 && computerScore < 5) {
      let UserInput = prompt("Rock, Paper, or Scissors?");
      let ComputerOutput = getComputerChoice();
      switch (evaluateChoice(UserInput, ComputerOutput)) {
        case "win":
          userScore += 1;
          console.log(
            `You win! ${capitalize(UserInput)} beats ${capitalize(
              ComputerOutput
            )}`
          );
          break;

        case "lose":
          computerScore += 1;
          console.log(
            `You lose! ${capitalize(UserInput)} gets beaten by ${capitalize(
              ComputerOutput
            )}`
          );
          break;

        default:
          console.log(
            `Draw. ${capitalize(UserInput)} and ${capitalize(
              ComputerOutput
            )}`
          );
          break;
      }
    }
  }
  game(); 