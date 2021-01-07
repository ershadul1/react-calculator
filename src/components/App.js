import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => {
  const props = {
    result: '0',
  };
  const { result } = props;
  return (
    <>
      <h1>Calculator</h1>
      <Display result={result} />
      <ButtonPanel />
    </>
  );
};

App.propTypes = {
  result: PropTypes.string.isRequired,
};

export default App;
