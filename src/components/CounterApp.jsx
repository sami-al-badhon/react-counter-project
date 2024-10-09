// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function CounterApp() {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count => Count + 1);
  };
  const decrement = () => {
    setCount(Count => Count - 1);
  };
  const zero = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="app-title">Counter App</h1>
      <div id="counter-div">
        <h2 className="count">Count : {Count} </h2>
        <div className="btn-div">
          <button
            className="btn"
            onClick={increment}
            disabled={Count >= 5 ? true : false}>
            +
          </button>
          <button
            className="btn"
            onClick={decrement}
            disabled={Count <= -5 ? true : false}>
            -
          </button>
          <button className="btn" onClick={zero}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
