import { createContext, useContext } from "react";

const DataContext = createContext({name:"", job:""});
// const DataContext2 = createContext("");
const ParentContext = () => {
  return (
    <DataContext.Provider value={{name:"Jenisha", job:"--"}}>
      <ChildCard1></ChildCard1>;
    </DataContext.Provider>
  );
};

const ChildCard1 = () => {
  return <ChildCard2></ChildCard2>;
};
const ChildCard2 = () => {
  return <ChildCard3></ChildCard3>;
};
const ChildCard3 = () => {
  return <ChildCard></ChildCard>;
};
const ChildCard = () => {
  const data = useContext(DataContext);
  // const data = useContext(DataContext2);
  return <>I am here {data.name} {data.job}</>
};

export default ParentContext;
