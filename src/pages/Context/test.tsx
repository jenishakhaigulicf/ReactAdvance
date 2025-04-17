// we created a context createContext
// then we wrapped the child with the provider
// context.provider and passed the value
// we use the context useContext(context_name)

import { createContext, useContext } from "react";

const dataContext = createContext<{ name: string } | null>(null);

const ParentContext = () => {
  return (
    <dataContext.Provider value={{ name: "Jenisha" }}>
      <ChildContext1 />
    </dataContext.Provider>
  );
};

const ChildContext1 = () => {
  return <ChildContext2 />;
};
const ChildContext2 = () => {
  return <ChildContext3 />;
};
const ChildContext3 = () => {
  return <ChildContext />;
};
const ChildContext = () => {
  const data = useContext(dataContext);
  return <>--------Hello i am child of {data?.name}-------</>;
};

export default ParentContext;
