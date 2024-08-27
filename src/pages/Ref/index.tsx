import { useRef, useState } from "react";

export const UseRefExample1 = () => {
  const inputRef: React.LegacyRef<HTMLInputElement> | null = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" />
      </div>
      <button onClick={focusInput}>Click Me</button>
    </div>
  );
};

export const UseRefExample2 = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const countUpdate = () => {
    countRef.current++;
    setCount(count + 1);
    console.log("count:", count, "countRef:", countRef.current);
  };

  return (
    <>
      <button onClick={countUpdate}>+</button>
      <div>
        {countRef.current}
        {count}
      </div>
    </>
  );
};
