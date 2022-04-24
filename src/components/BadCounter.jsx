import React, { useState } from 'react';

const BadCounter = () => {
  const [count, setCount] = useState(0);

  // 非同期処理のためcountが最新でない場合に、カウントできない
  // 非同期であることを分かりやすくするためにわざとsetTimeoutで呼び出している
  const countUp = () => {
    setTimeout(() => setCount(count + 1), 500);
  }
  const countDown = () => {
    setTimeout(() => setCount(count - 1), 500);
  }

  return (
    <div>
    <h1>BadCounter.jsx</h1>
      <p>現在のカウント:{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  )
}

export default BadCounter;