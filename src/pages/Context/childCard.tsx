import { useContext } from "react";
import { DataContext } from "./parentContext";

const Card = () => {
  const user = useContext(DataContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};
export default Card;
