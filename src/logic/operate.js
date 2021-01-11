import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne == null) {
    return numberTwo;
  }
  if (operation === '+') {
    return Big(numberOne) * 1 + Big(numberTwo) * 1;
  }
  if (operation === '-') {
    return Big(numberOne) - Big(numberTwo);
  }
  if (operation === 'x') {
    return Big(numberOne) * Big(numberTwo);
  }
  if (operation === '÷') {
    return Big(numberOne) / Big(numberTwo);
  }
  if (operation === '+%') {
    return parseInt(Big(numberTwo) * 0.01 * Big(numberOne), 10) + parseInt(Big(numberOne), 10);
  }
  if (operation === '-%') {
    return parseInt(Big(numberOne), 10) - parseInt(Big(numberTwo) * 0.01 * Big(numberOne), 10);
  }
  return '0';
};

export default operate;
