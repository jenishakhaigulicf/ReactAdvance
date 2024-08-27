import { useReducer } from "react";
const initialState = { count: 0 };
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count + 1 };

    default:
      return { ...state };
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>+</button>
    </>
  );
};

interface IState {
  count: number;
}

interface IAction {
  type: "INCREMENT" | "DECREMENT";
  payload?: number;
}

export default Reducer;
