// import { useReducer } from "react";
// const initialState = {
//   count: 0
// };
// interface State {
//   count: number;
// }
// interface Action {
//   type: "increment" | "decrement";
//   payload?: any;
// }
// const Reducer = () => {
//   const reducer = (state: State, action: Action) => {
//     switch (action.type) {
//       case "increment":
//         return { ...state, count: state.count + action.payload };
//       case "decrement":
//         return { ...state, count: state.count - 1 };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
//         +
//       </button>
//       count: {state.count}
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </>
//   );
// };

// export default Reducer;

import React from "react";
const initialState = { count: 0 };
const reducer = (
  state: typeof initialState,
  action: { type: "increment" | "decrement"; payload: number }
) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement": {
      return { ...state, count: state.count - action.payload };
    }

    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const inc = () => {
    dispatch({ type: "increment", payload: 5 });
  };
  const dec = () => {
    dispatch({ type: "decrement", payload: 5 });
  };
  return (
    <div>
      <button onClick={dec}>-</button>
      {state.count}
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Reducer;
