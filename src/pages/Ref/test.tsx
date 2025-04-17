// Create a ref
// point that ref to input field
// on clicking of a button, the input should highlight
// use focus on the current value

import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

// create a count variable
// increase the count value on clicking of a button
// do that by increasing count current value

// the count value of useState might be different in the console
// and the UI
// the set function is async
// so the sync code runs first, we see old value
// in the console

export const UseRefExample2 = () => {
  const inputRef: React.LegacyRef<HTMLInputElement> | undefined = useRef(null);

  return (
    <>
      <button onClick={() => inputRef?.current?.focus()}>
        Click Me to focus on ref
      </button>
      <input ref={inputRef}></input>
    </>
  );
};

// export const UseRefExample2 = () => {
//   const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
//   return (
//     <>
//       <div>
//         <Button onClick={() => inputRef?.current?.focus()}>focus</Button>
//       </div>
//       <input ref={inputRef} />
//     </>
//   );
// };
