// 使用 useContext 和 useReducer 实现 Redux 全局状态管理
//  useContext 可以实现全局状态共享
// useReducer 提供派发修改状态的功能

import React from "react";
import TextContext from "./context";
import ButtonOne from "./botton1";
import ButtonTwo from "./button2";
import MyState from './state';

const MyReducer = () => {
  return (
    <>
      <MyState>
        <TextContext />
        <ButtonOne />
        <ButtonTwo />
      </MyState>
    </>
  );
};

export default MyReducer;
