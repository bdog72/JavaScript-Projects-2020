//
//
// console.log('Bozo Boy');

const message = document.querySelector('.message');
const score = document.querySelector('.score');

const buttons = document.querySelectorAll('button');
let winner = [0, 0];

function messageFunction(mes) {
  message.innerHTML = mes;
}

const checkWinner = (player, computer) => {
  if (player === computer) {
    return `Draw`;
  }

  if (player === `Rock`) {
    if (computer === `Paper`) {
      return `Computer`;
    } else {
      return `Player`;
    }
  }
  if (player === `Paper`) {
    if (computer === `Scissors`) {
      return `Computer`;
    } else {
      return `Player`;
    }
  }
  if (player === `Scissors`) {
    if (computer === `Rock`) {
      return `Computer`;
    } else {
      return `Player`;
    }
  }
};

const playGame = (e) => {
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = `Rock`;
  } else if (computerSelection <= 0.67) {
    computerSelection = `Paper`;
  } else {
    computerSelection = `Scissors`;
  }
  // console.log(playerSelection, computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  // console.log(result);
  if (result === `Player`) {
    result += ` Wins`;
    winner[0]++;
  } else if (result === `Computer`) {
    result += ` Wins`;
    winner[1]++;
  } else {
    result += ` Results in a tie match`;
  }
  score.innerHTML = `Player [${winner[0]}] Computer [${winner[1]}]`;
  messageFunction(
    `${playerSelection} vs ${computerSelection} <br> <h3>${result}</h3>`
  );
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}
