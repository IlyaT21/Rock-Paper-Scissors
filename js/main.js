let inputArray = document.querySelectorAll('.options>button');
let playerScore = 0;
let machineScore = 0;
let gameResult = document.querySelector('#game-result');
let handResult = document.querySelector('#hand-result');

inputArray.forEach((e) => {
  e.addEventListener('click', () => {
    let counter = Math.floor(Math.random() * 3);
    let machineInput;

    switch (counter) {
      case 0:
        machineInput = 'rock';
        break;
      case 1:
        machineInput = 'paper';
        break;
      case 2:
        machineInput = 'scissors';
        break;
    }

    switch (e.id) {
      case 'rock':
        switch (machineInput) {
          case 'rock':
            handResult.innerText = 'Draw';
            break;
          case 'paper':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;

            if(machineScore == 5) {
              gameResult.innerText = 'You Lost...';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'red';
            }
            break;
          case 'scissors':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            if(playerScore == 5) {
              gameResult.innerText = 'You Won!';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'green';
            }
            break;
        }
        break;
      case 'paper':
        switch (machineInput) {
          case 'rock':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            if(playerScore == 5) {
              gameResult.innerText = 'You Won!';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'green';
            }
            break;
          case 'paper':
            handResult.innerText = 'Draw';
            break;
          case 'scissors':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;

            if(machineScore == 5) {
              gameResult.innerText = 'You Lost...';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'red';
            }
            break;
        }
        break;
      case 'scissors':
        switch (machineInput) {
          case 'rock':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;

            if(machineScore == 5) {
              gameResult.innerText = 'You Lost...';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'red';
            }
            break;
          case 'paper':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            if(playerScore == 5) {
              gameResult.innerText = 'You Won!';
              inputArray.forEach((e) => {
                e.disabled = true;
              })
              gameResult.style.color = 'green';
            }
            break;
          case 'scissors':
            handResult.innerText = 'Draw';
            break;
        }
        break;
    }
  })
})