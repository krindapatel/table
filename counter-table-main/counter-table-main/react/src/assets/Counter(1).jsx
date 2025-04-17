import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(Count => Count + 1);
  };

  const decrement = () => {
    setCount(Count => (Count > 0 ? Count - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', background:'#eee', padding:'100px' }}>
      <h1>Counter: {count}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button style={{padding:'10px', background:'#3c1361', color:'white', cursor:'pointer', fontSize:'1.2rem', borderRadius:'10px' }} onClick={increment}>Increment</button>
        <button style={{padding:'10px', background:'#3c1361', color:'white', cursor:'pointer', fontSize:'1.2rem', borderRadius:'10px' }} onClick={decrement}>Decrement</button>
        <button style={{padding:'10px', background:'#3c1361', color:'white', cursor:'pointer', fontSize:'1.2rem', borderRadius:'10px'}} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
