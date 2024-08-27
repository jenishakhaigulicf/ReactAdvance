import { useEffect, useState } from "react";

// export const UseEffectCleanUp = () => {

//   // Note: screen width is always constant, you screen size not tab
//   const [width, setWidth] = useState(window.screen.width);

//   const resizeFunc = () => {
//     setWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener("resize",resizeFunc);

//     return () => {
//       window.removeEventListener("resize", resizeFunc);
//     };
//   }, []);

//   return <div>This is the width: {width} </div>;
// };

export const UseEffectCleanUp = () => {
  const [timer, setTimer] = useState(10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (timer <= 0) return;
    const timerFunc = setTimeout(() => {
      setTimer((prev) => {
        return prev - 1;
      });
      // setTimer((prev) => {
      //   return prev - 1;
      // });
      // Note: if we add the above code and this code as well then issue occurs
      // setTimer(timer - 1);
      // setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(timerFunc);
    };
  }, [timer]);

  return (
    <>
      <div>{timer}</div>
      <div>
        <button disabled={!timer} onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <button disabled={!timer} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};
