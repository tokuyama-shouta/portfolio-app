import React, {useState, useEffect } from 'react'
import classes from './Counter.module.scss';



const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log('マウント時とcount1が変化した時に発火useEffect')
  // }, [count1]);

  useEffect(() => {
    console.log('マウント時とcount1が変化した時に発火useEffect');
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
      console.log('countUp');
    }, 1000)
    return () => {
      clearInterval(countUp);
      console.log('unmount');
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.buttonWrapper}>
        <span className={classes.buttonText}>カウント1</span>
        <button onClick={() => {setCount1((prevCount) => prevCount + 1);}}>{count1}</button>
      </div>
      <div className={classes.buttonWrapper}>
      <span className={classes.buttonText}>カウント2</span>
        <button onClick={() => {setCount2((prevCount) => prevCount + 1);}}>{count2}</button>
      </div>
    </div>
  )
}

export default Counter
