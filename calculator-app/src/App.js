import React, { useState } from 'react';
import Button from './components/Button';
import './styles.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString()); // Evaluate the expression
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue(''); // Clear the display
    } else {
      setDisplayValue(displayValue + value); // Append clicked value to display
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{displayValue}</div>
      <div className="button-grid">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn, index) => (
          <Button key={index} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
