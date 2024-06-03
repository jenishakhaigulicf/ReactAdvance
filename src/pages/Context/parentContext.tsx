import { useState, createContext } from "react";
import Card from "./childCard";
export const DataContext = createContext("");
function Data() {
  const [user, _setUser] = useState("Jesse Hall");

  return (
    <DataContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </DataContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Card />
    </>
  );
}

export default Data;
