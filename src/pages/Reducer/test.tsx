import { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (
    state: typeof initialState,
    action: { type: "INCREMENT" | "DECREMENT"; payload: number }
  ) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "DECREMENT":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        **-
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
    </>
  );
};

export default Reducer;
