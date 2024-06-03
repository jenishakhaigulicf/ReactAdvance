import { Box, Button, Center, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
// import EnhancedComponent from "./pages/HOC";
// import UseEffectCleanUp from "./pages/UseEffectCleanUp";
// import Example from "./pages/Ref";
import ParentContext from "./pages/Context/parentContext";
// import Reducer from "./pages/Reducer";

export function App() {
  const [isHidden, setIsHidden] = useState(false);

  const toggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <ChakraProvider>
      {/* <EnhancedComponent />
          <UseEffectCleanUp />
          <Example />
          <Reducer />
          <ParentContext />
       */}
      <Center mt={3}>
        <Button onClick={toggle}>{isHidden ? "Show Me" : "Hide Me"}</Button>
        <Box>{isHidden ? "" : "I am Here!!!"}</Box>
      </Center>
    </ChakraProvider>
  );
}
