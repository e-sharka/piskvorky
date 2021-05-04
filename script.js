'use strict';

let kdoJeNaTahu = 'circle';

document.querySelectorAll('.hraci-pole__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (kdoJeNaTahu === 'circle') {
      btn.classList.add('board__field--circle');
      document.querySelector('.ikona-hrac').src = 'obrazky/cross.svg';
      kdoJeNaTahu = 'cross';
    } else {
      btn.classList.add('board__field--cross');
      document.querySelector('.ikona-hrac').src = 'obrazky/circle.svg';
      kdoJeNaTahu = 'circle';
    }

    const pozice = getPosition(btn);

    const pole = getField(pozice.row, pozice.column);

    if (isWinningMove(pole) === true) {
      setTimeout(function () {
        let result;
        if (getSymbol(pole) === 'circle') {
          result = confirm('Vyhrál kroužek. Načíst novou hru?');
          if (result === true) {
            location.reload();
          }
        } else {
          result = confirm('Vyhrál křížek. Načíst novou hru?');
          if (result === true) {
            location.reload();
          }
        }
      }, 400);
    }
  });
});

/*funkce, která zjistí, jestli je pět políček stejného symbolu vedle sebe*/
const symbolsToWin = 5;

const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);
  let i;
  let j;
  let inRow = 1;
  let inDiag = 1;
  let inDiagB = 1;

  /*diagonálně doleva nahoru*/
  i = origin.row;
  j = origin.column;
  while (i > 0 && j > 0 && symbol === getSymbol(getField(i - 1, j - 1))) {
    inDiag += 1;
    i -= 1;
    j -= 1;
  }
  if (inDiag >= symbolsToWin) {
    return true;
  }

  /*diagonálně doprava dolů*/
  i = origin.row;
  j = origin.column;
  while (
    i < boardSize - 1 &&
    j < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, j + 1))
  ) {
    inDiag += 1;
    i += 1;
    j += 1;
  }

  if (inDiag >= symbolsToWin) {
    return true;
  }

  /*diagonálně doprava nahoru*/
  i = origin.row;
  j = origin.column;
  while (
    i > 0 &&
    j < boardSize - 1 &&
    symbol === getSymbol(getField(i - 1, j + 1))
  ) {
    inDiagB += 1;
    i -= 1;
    j += 1;
  }
  if (inDiagB >= symbolsToWin) {
    return true;
  }

  /*diagonálně doleva dolů*/
  i = origin.row;
  j = origin.column;

  while (
    i < boardSize - 1 &&
    j > 0 &&
    symbol === getSymbol(getField(i + 1, j - 1))
  ) {
    inDiagB += 1;
    i += 1;
    j -= 1;
  }

  if (inDiagB >= symbolsToWin) {
    return true;
  }

  /*doleva*/
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow += 1;
    i -= 1;
  }
  /*doprava*/
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow += 1;
    i += 1;
  }
  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  /*nahoru*/
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn += 1;
    i -= 1;
  }
  /*dolu*/
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn += 1;
    i += 1;
  }
  if (inColumn >= symbolsToWin) {
    return true;
  }
  return false;
};

/*funkce, která zjistí, jaký symbol je na políčku*/
const getSymbol = (btn) => {
  if (btn.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (btn.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

/*funkce, která najde hrací políčko na základě souřadnic*/
const boardSize = 10;
const fields = document.querySelectorAll('.hraci-pole__btn');
const getField = (row, column) => {
  return fields[row * boardSize + column];
};

/*funkce, která pro dané políčko vrátí objekt, ve kterém bude řada a sloupec, kam byl umístěn symbol*/
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
