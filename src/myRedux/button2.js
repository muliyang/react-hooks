import React, { useContext } from "react";
import { StateContext, StateEnum } from "./state";

const ButtonTwo = () => {
  const { dispatch } = useContext(StateContext);
  return (
    <p>
      <button onClick={() => dispatch({ type: StateEnum, color: "pink" })}>
        粉色
      </button>
    </p>
  );
};

export default ButtonTwo;
