let inputArray = document.querySelectorAll('.options>button');
let playerScore = 0;
let machineScore = 0;
let gameResult = document.querySelector('#game-result')
let handResult = document.querySelector('#hand-result')

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
            handResult.innerText = 'Draw - Points for Both';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
          case 'paper':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
          case 'scissors':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;
            break;
        }
        break;
      case 'paper':
        switch (machineInput) {
          case 'rock':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;
            break;
          case 'paper':
            handResult.innerText = 'Draw - Points for Both';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
          case 'scissors':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
        }
        break;
      case 'scissors':
        switch (machineInput) {
          case 'rock':
            handResult.innerText = 'Point for the Machine';

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
          case 'paper':
            handResult.innerText = 'Point for You';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;
            break;
          case 'scissors':
            handResult.innerText = 'Draw - Points for Both';

            playerScore++;
            document.querySelector('#player-score').innerText = playerScore;

            machineScore++;
            document.querySelector('#machine-score').innerText = machineScore;
            break;
        }
        break;
    }
  })
})