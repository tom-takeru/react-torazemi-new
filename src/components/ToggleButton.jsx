import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(prevState => !prevState);
  }

  useEffect(() => {
    console.log('Current state is ', on);
    if (on) {
      console.log('Subscribe database.');
    }
    return () => {
      console.log('Unsbuscribe database.');
    }
  });

  return (
    <>
      <h1>ToggleButton.jsx</h1>
      <button onClick={toggle}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default ToggleButton;
