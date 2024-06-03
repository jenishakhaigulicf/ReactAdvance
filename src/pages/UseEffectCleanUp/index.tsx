import { useEffect, useState } from "react";

const useEffectCleanUp = () => {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);
  return <div>useEffectCleanUp</div>;
};

export default useEffectCleanUp;

// import React from "react";

// const UseEffectCleanUp = () => {
//   const [time, setTime] = React.useState(60);
//   React.useEffect(() => {
//     if (time <= 0) return;
//     const timeInterval = setTimeout(() => {
//       setTime(time - 1);
//     }, 1000);

//     () => {
//       clearTimeout(timeInterval);
//     };
//   }, [time]);

//   return <div>{time}</div>;
// };

// export default UseEffectCleanUp;
