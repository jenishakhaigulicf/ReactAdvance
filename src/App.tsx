import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import EnhancedComponent from "./pages/HOC/test";
import {UseEffectCleanUp} from "./pages/UseEffectCleanUp";
import {UseRefExample1, UseRefExample2 } from "./pages/Ref";
import ParentContext from "./pages/Context/parentContext";
import Reducer from "./pages/Reducer";

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
        <button onClick={toggle}>
          click me
        </button>
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
