const higherOrderComponent = (WrappedComponent: IWrappedComponent) => {
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

const SimpleComponent = higherOrderComponent(({ name }: IProp) => {
  return <>I am Simple Component {name}</>;
});

// const EnhancedComponent = higherOrderCo¬mponent(SimpleComponent);

type IWrappedComponent = (props: IProp) => JSX.Element;
type IProp = { name: string }

export default SimpleComponent;
