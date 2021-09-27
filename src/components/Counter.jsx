import React, {useState } from 'react'

function initialaizeCounter(){
  for(let i=0; i<20000; i++){
    console.log(i);
  }
  return 0;
}

const Counter = () => {
  const [count, setCount] = useState(() => {
    const initialValue = initialaizeCounter();
    return initialValue;
  });
  return (
    <button onClick={() => {
      setCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount + 1);
    }}
    
    >
      {count}
    </button>
  )
}

export default Counter
