import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const countUp = () => {
    setCount(prevState => prevState + 1);
  }
  const countDown = () => {
    setCount(prevState => prevState - 1);
  }
  const countUp2 = () => {
    setCount2(prevState => prevState + 1);
  }
  const countDown2 = () => {
    setCount2(prevState => prevState - 1);
  }

  useEffect(() => {
    console.log('Current count is ', count);
  }, [count]);

  return (
    <div>
      <h1>Counter.jsx</h1>
      <p>現在のカウント:{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      <p>現在のカウント2:{count2}</p>
      <button onClick={countUp2}>up</button>
      <button onClick={countDown2}>down</button>
    </div>
  );
}

export default Counter;
