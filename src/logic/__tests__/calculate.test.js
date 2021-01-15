import calculate from '../calculate';

test('AC button resets the data obj', () => {
  const data = {
    total: '111',
    next: '223',
    operation: '+',
  };

  const result = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(data, 'AC')).toStrictEqual(result);
});

test('+/- button changes sign of total and next', () => {
  const data = {
    total: '111',
    next: '-223',
    operation: '+',
  };

  const result = {
    total: '-111',
    next: '223',
    operation: '+',
  };

  expect(calculate(data, '+/-')).toStrictEqual(result);
});

test('% button divides total by 100 if next is null', () => {
  const data = {
    total: '111',
    next: null,
    operation: null,
  };

  const result = {
    total: '1.11',
    next: null,
    operation: null,
  };

  expect(calculate(data, '%')).toStrictEqual(result);
});

test('% button adds percentage if operation is +', () => {
  const data = {
    total: '20',
    next: '100',
    operation: '+',
  };

  const result = {
    total: '120',
    next: null,
    operation: '+%',
  };

  expect(calculate(data, '%')).toStrictEqual(result);
});

test('% button subtracts percentage if operation is -', () => {
  const data = {
    total: '20',
    next: '100',
    operation: '-',
  };

  const result = {
    total: '80',
    next: null,
    operation: '-%',
  };

  expect(calculate(data, '%')).toStrictEqual(result);
});

test('= button operates on total and next using operation', () => {
  const data = {
    total: '20',
    next: '100',
    operation: '+',
  };

  const result = {
    total: '120',
    next: null,
    operation: null,
  };

  expect(calculate(data, '=')).toStrictEqual(result);
});

test('+ button operates on total and next using operation', () => {
  const data = {
    total: '20',
    next: '100',
    operation: '+',
  };

  const result = {
    total: '',
    next: '120',
    operation: '+',
  };

  expect(calculate(data, '+')).toStrictEqual(result);
});

test('+ button shifts total to next if next is null', () => {
  const data = {
    total: '20',
    next: null,
    operation: null,
  };

  const result = {
    total: '',
    next: '20',
    operation: '+',
  };

  expect(calculate(data, '+')).toStrictEqual(result);
});
