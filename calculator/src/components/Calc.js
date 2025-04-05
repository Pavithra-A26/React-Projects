import React, { useState } from 'react'
import './calculator.css'

export const Calc = () => {
    const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', 
    '4', '5', '6', 
    '1', '2', '3', 
    '0', '.', '+',
    '/', '*','-', 
    'C','='
  ];

    
  return (
    <>
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}
