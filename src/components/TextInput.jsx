import React, { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState('');

  const handleName = (event) => {
    console.log('Current textbox:', event.target.value);
    setName(event.target.value);
  }

  return (
    <>
      <h1>TextInput.jsx</h1>
      <input
        onChange={(event) => handleName(event)}
        type={'text'}
        value={name}
      />
    </>
  )
}

export default TextInput;