import { useState } from "react";

const higherOrderComponent = (
  WrappedComponent: ({ name }: { name: string }) => JSX.Element
) => {
  return function HigherOrderComponent() {
    // Note: same api call
    const [name, _setName] = useState("Jen");
    return (
      <>
        <div>HOC</div>
        {/* different UI */}
        <WrappedComponent name={name} />
      </>
    );
  };
};

const WrappedComponent = ({ name }: { name: string }) => {
  return <>My name is {name}</>;
};

const SimpleComponent = higherOrderComponent(WrappedComponent);
export default SimpleComponent;
