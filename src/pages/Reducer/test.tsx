import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (
  state: { count: number },
  action: { type: "increment" | "decrement"; payload: number }
) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
};

export default Reducer;
