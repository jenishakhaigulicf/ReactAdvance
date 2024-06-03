import { useRef, useState } from "react";

const RefSnippet = () => {
  const count = useRef(0);
  const inputElementRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  // let [a, setA] = useState(0);
  const clickHandler = () => {
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
    count.current++;
    // setA((prev) => prev + 1);
    // console.log("count: ", count, "a: ", a);
    // setA((prev) => prev + 2);
  };
  return (
    <div>
      <input type="text" ref={inputElementRef} />
      <button onClick={clickHandler}>
        {/* {a}--- */}
        {count.current}
      </button>
    </div>
  );
};

export default RefSnippet;

// const Example = () => {
//   const count = useRef(0);
//   const [a, setA] = useState(0);
//   const clickHandler = () => {
//     count.current++;
//     setA(a + 1);
//     console.log("a---> ", a);
//     console.log("count---> ", count.current);
//   };
//   return (
//     <div>
//       <button onClick={clickHandler}>+</button>
//       {a}
//       {count.current}
//     </div>
//   );
// };

// export default Example;
