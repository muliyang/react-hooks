// 在本文件中 主要实现状态的管理
import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateEnum = "CHANGE_COLOR";

const StateComponent = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case StateEnum:
        return { ...state, color: action.color };
      default:
        return state;
    }
  };

  const [reducerColor, dispatchColor] = useReducer(reducer, { color: "blue" });

  return (
    <div>
      <StateContext.Provider
        value={{ color: reducerColor.color, dispatch: dispatchColor }}
      >
        {props.children}
      </StateContext.Provider>
    </div>
  );
};

export default StateComponent;
