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
