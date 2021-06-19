import React, { useState } from 'react';

export function Input() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      {inputValue && <h3>{inputValue}</h3>}
      <input
        value={inputValue}
        // basic
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={(e) => {
          if (!e.target.value.includes('e')) {
            setInputValue(e.target.value);
          }
        }}
      />
    </div>
  );
}
