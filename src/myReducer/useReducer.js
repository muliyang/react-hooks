import React, { useReducer } from "react";

const ReducerTest = () => {
  // state 是基本类型
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  };

  // state是对象
  const reducerObjFn = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, count: state.count + 1 };
      case "sub":
        return { ...state, count: state.count - 1 };
      default:
        return { ...state };
    }
  };

  const [countObj, dispatch] = useReducer(reducerObjFn, { count: 10 });
  //   const [count, dispatch] = useReducer(reducerFn, 10);

  return (
    <div>
      {/* <h3>{count}</h3> */}
      <h3>{countObj.count}</h3>
      <p>
        <button onClick={() => dispatch({ type: "add" })}>Increment</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "sub" })}>Decrement</button>
      </p>
    </div>
  );
};

export default ReducerTest;

//
