'use strict';

let kdoJeNaTahu = 'circle';

document.querySelectorAll('.hraci-pole__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (kdoJeNaTahu === 'circle') {
      btn.classList.add('board__field--circle');
      document.querySelector('.ikona-hrac').src = 'obrazky/circle.svg';
      kdoJeNaTahu = 'cross';
    } else {
      btn.classList.add('board__field--cross');
      document.querySelector('.ikona-hrac').src = 'obrazky/cross.svg';
      kdoJeNaTahu = 'circle';
    }
  });
});

/*const displayCircle = (event) => {
  event.target.classList.add('board__field--circle');
};
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', displayCircle);
}

const displayCross = (event) => {
  event.target.classList.add('board__field--cross');
};
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', displayCross);
} */
