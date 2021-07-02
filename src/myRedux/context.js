import React, { useContext } from "react";
import { StateContext } from "./state";

const TextCon = () => {
  const { color } = useContext(StateContext);
  return <p style={{ color }}>这里一段可以改变颜色的文字 , 初始化是蓝色</p>;
};

export default TextCon;
