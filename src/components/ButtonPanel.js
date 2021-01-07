import Button from './Button';

const ButtonPanel = () => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'x'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  return (
    <>
      <div>
        {groups.group1.map(value => <Button key={value} name={value} />)}
      </div>
      <div>
        {groups.group2.map(value => <Button key={value} name={value} />)}
      </div>
      <div>
        {groups.group3.map(value => <Button key={value} name={value} />)}
      </div>
      <div>
        {groups.group4.map(value => <Button key={value} name={value} />)}
      </div>
      <div>
        {groups.group5.map(value => <Button key={value} name={value} />)}
      </div>
    </>
  );
};

export default ButtonPanel;
