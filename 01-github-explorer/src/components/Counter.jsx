import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState;

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>0</h2>
      <button onClick={increment} type="button">
        Increment
      </button>
    </div>
  );
}

export default Counter;
