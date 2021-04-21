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
