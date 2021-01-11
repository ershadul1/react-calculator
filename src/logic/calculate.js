import operate from './operate';

const calculate = (data, buttonName) => {
  const copyData = { ...data };
  if (buttonName === 'AC') {
    copyData.total = null;
    copyData.next = null;
    copyData.operation = null;
  } else if (buttonName === '+/-') {
    copyData.total = parseInt(copyData.total, 10) * (-1);
    copyData.next = parseInt(copyData.next, 10) * (-1);
  } else if (buttonName === '%') {
    if (copyData.next == null) {
      copyData.total *= 0.01;
    } else {
      copyData.total = operate(copyData.next, copyData.total, (copyData.operation += '%'));
      copyData.next = null;
    }
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷') {
    if (copyData.next == null) {
      copyData.next = copyData.total;
    } else {
      copyData.total = copyData.total || 0;
      copyData.next = operate(copyData.next, copyData.total, copyData.operation);
    }
    copyData.total = '';
    copyData.operation = buttonName;
  } else if (buttonName === '=') {
    copyData.total = operate(copyData.next, copyData.total, copyData.operation);
    copyData.next = null;
    copyData.operation = null;
  } else {
    copyData.total = (copyData.total || '') + buttonName;
  }
  if (copyData.total !== null) {
    copyData.total = copyData.total.toString();
  }
  if (copyData.next !== null) {
    copyData.next = copyData.next.toString();
  }
  return copyData;
};

export default calculate;
