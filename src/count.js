import React, { useState } from "react";
import './style.css'

const Count = () => {
  const [count, setCount] = useState(0);
  // const _useState = useState(0);
  // const count = _useState(0);
  // const setCount = _useState(1);
  // useState 函数接收的参数是状态的初始值（initial state）。它返回了一个数组，这个数组的第0位是当前的状态值，第一位是改变状态的函数
  // react hook 不能写在if else 这种条件语句中，因为他必须有完全一样的渲染顺序
  return (
    <section className={'count_wrap'}>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
    </section>
  );
};

export default Count;
