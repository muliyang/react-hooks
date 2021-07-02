import React, { useContext } from "react";
import { StateContext, StateEnum } from "./state";

const ButtonOne = () => {
  const { dispatch } = useContext(StateContext);
  return (
    <p>
      <button onClick={() => dispatch({ type: StateEnum, color: "orange" })}>
        橙色
      </button>
    </p>
  );
};

export default ButtonOne;
