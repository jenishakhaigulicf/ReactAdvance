// create a timer
// display the state in the UI
// keep the timer in useEffect
// keep time in the dependency of the useEffect
// when the time changes the useEffect will re-run
// in the useEffect decrease the timer value every 1sec
// until the value is equal to 0
// disable the button when the timer ends

import { useEffect, useState } from "react";

// export const UseEffectCleanUp = () => {
//   const [time, setTime] = useState(10);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (time <= 0) return;
//     const timer = setInterval(() => {
//       setTime(time - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [time]);

//   return (
//     <>
//       {time}{" "}
//       <button disabled={time <= 0} onClick={() => setCount(count + 1)}>
//         Click Me ({count})
//       </button>
//     </>
//   );
// };

export const UseEffectCleanUp = () => {
  const [width, setWidth] = useState(window.screen.width);
  const resizeFunc = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return <>{width}</>;
};
