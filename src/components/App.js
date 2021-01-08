import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <h1>Calculator</h1>
        <Display result={total || '0'} next={next} operation={operation} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
