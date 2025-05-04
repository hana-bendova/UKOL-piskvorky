import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const gameButtons = document.querySelectorAll('.playfield');
const currentPlayerIcon = document.querySelector('.foto img');

const placeCircle = (event) => {
  const clickedButton = event.target;

  if (currentPlayer === 'circle') {
    clickedButton.classList.add('board__field--circle');
    currentPlayerIcon.src = 'cross.svg';
    currentPlayer = 'cross';
  } else {
    clickedButton.classList.add('board__field--cross');
    currentPlayerIcon.src = 'circle.svg';
    currentPlayer = 'circle';
  }
  clickedButton.disabled = true;

  const boardState = [];
  gameButtons.forEach((button) => {
    if (button.classList.contains('board__field--circle')) {
      boardState.push('o');
    } else if (button.classList.contains('board__field--cross')) {
      boardState.push('x');
    } else {
      boardState.push('_');
    }
  });

  const winner = findWinner(boardState);

  if (winner == 'o') {
    alert('Vyhrálo kolečko');
    location.reload();
  } else if (winner == 'x') {
    alert('Vyhrál křížek');
    location.reload();
  }
};

gameButtons.forEach((button) => {
  button.addEventListener('click', placeCircle);
});

const confirmRestar = document.querySelector('a.restart');
confirmRestar.addEventListener('click', (event) => {
  if (!confirm('Opravdu chceš začít znovu?')) {
    event.preventDefault();
  }
});
