const higherOrderComponent = (
  WrappedComponent: (props: { name: string }) => JSX.Element
) => {
  return function HigherOrderComponent() {
    const a = { name: "Jenisha" };
    return (
      <div>
        HigherOrderComponent
        <br />
        <WrappedComponent {...a} />
      </div>
    );
  };
};

const SimpleComponent = higherOrderComponent(({ name }: { name: string }) => {
  return <>I am Simple Component {name}</>;
});

// const EnhancedComponent = higherOrderComponent(SimpleComponent);

export default SimpleComponent;
