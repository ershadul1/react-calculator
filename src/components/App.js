import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleClick = buttonName => {
    setState(
      state => calculate(state, buttonName),
    );
  };

  const { total, next, operation } = state;

  return (
    <>
      <h1>
        Calculator
      </h1>
      <Display result={total || next || '0'} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
