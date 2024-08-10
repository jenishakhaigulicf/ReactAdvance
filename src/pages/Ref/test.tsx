// Create a ref
// point that ref to input field
// on clicking of a button, the input should highlight
// use focus on the current value

import { useRef, useState } from "react";

const UseRef1 = () => {
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <input ref={inputRef} type="text"></input>
      <button onClick={clickHandler}>Cick ME</button>
    </>
  );
};

// create a count variable
// increase the count value on clicking of a button
// do that by increasing count current value

// the count value of useState might be different in the console
// and the UI
// the set function is async
// so the sync code runs first, we see old value
// in the console
const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <>
      {countRef.current} {count}
      <button
        onClick={() => {
          countRef.current++;
          // This is async
          // this wont do count + 3
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          // this will do count + 3
          setCount((prev)=> prev +1);
          setCount((prev)=> prev +1);
          
          // console.log("countRef", countRef);
          // this is sync
          console.log("count", count);
        }}
      >
        CLick me
      </button>
    </>
  );
};
export default UseRef;
