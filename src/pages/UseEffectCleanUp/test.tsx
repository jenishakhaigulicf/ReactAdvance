// create a timer
// display the state in the UI
// keep the timer in useEffect
// keep time in the dependency of the useEffect
// when the time changes the useEffect will re-run
// in the useEffect decrease the timer value every 1sec
// until the value is equal to 0
// disable the button when the timer ends

import { useEffect, useState } from "react";

const UseEffectCleanUp1 = () => {
  const [time, setTime] = useState(10);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // if (time <= 0) return;
    let timer
    if (time >0) {

       timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }


    return () => {
      clearInterval(timer)
    }


  }, [time]);

  return (
    <>
      <button onClick={() => setCount(count + 1)} disabled={time <= 0}>
        CLick ME {count}
      </button>
      <div>{time}</div>
    </>
  );
};

const UseEffectCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const resizeFunc = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize',resizeFunc)

    return () => {
      window.removeEventListener('resize',resizeFunc)
    }
  },[width])
  return <>{width}</>
}

export default UseEffectCleanUp;
