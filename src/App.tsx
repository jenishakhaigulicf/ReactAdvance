import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import EnhancedComponent from "./pages/HOC/test";
import { UseEffectCleanUp } from "./pages/UseEffectCleanUp/test";
import { UseRefExample1, UseRefExample2 } from "./pages/Ref";
import ParentContext from "./pages/Context/test";
import Reducer from "./pages/Reducer/test";

interface ICar {
  cp: number;
  sp: number;
}

const car: ICar = {
  cp: 100,
  sp: 90,
};

type a = Record<string, number>;

const mismatch: a = car;

export function App() {
  const [isHidden, setIsHidden] = useState(false);

  const toggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <ChakraProvider>
      {/* Note: HOC implementation */}
      <EnhancedComponent />

      {/* Note: to test the component unmount cleanup function trigger */}
      <div>
        <button onClick={toggle}>click me</button>
        {!isHidden && <UseEffectCleanUp />}
      </div>

      <UseRefExample1 />
      {/* Note: how ref does not cause re-rendering */}
      <UseRefExample2 />

      {/* Note: context example */}
      <ParentContext />

      {/* Note: reducer example */}
      <Reducer />
    </ChakraProvider>
  );
}
