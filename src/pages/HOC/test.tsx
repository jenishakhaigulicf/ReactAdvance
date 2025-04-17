import { useState } from "react";

const SimpleComponent = ({ data }: { data: string }) => {
  return <>Hello there i am simple component called by {data}</>;
};

const hoc = (SimpleComponent: ({ data }: { data: string }) => JSX.Element) => {
  return function HigherOrderComponent() {
    const [name, _setName] = useState("Jenisha");
    return (
      <>
        i am parentContext
        <SimpleComponent data={name} />
      </>
    );
  };
};

const EnhancedComponent = hoc(SimpleComponent);

export default EnhancedComponent;
