import React, { useState, useEffect } from "react";

const CallApiSample = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('tom-takeru');
  const ids = ['tom-takeru', 'deatiger', 'gaearon', 'aws', 'google', 'facebook'];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setName(data.name);
    })
    .catch(error => {
      console.log(error);
    })
  }
  , [id]);
  useEffect(() => console.log('test'), [name]);
  
  return (
    <div>
      <h1>CallApiSample.jsx</h1>
      <p>{id}の、Github上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  )
}

export default CallApiSample;