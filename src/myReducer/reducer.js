// 什么是reducer ? 
// reducer的概念是伴随着Redux的出现逐渐在JavaScript中流行起来。但我们并不需要学习Redux去了解Reducer。
// 简单来说 reducer是一个函数(state, action) => newState：接收当前应用的state和触发的动作action，计算并返回最新的state。

// reducer 的幂等性
// reducer本质是一个纯函数，没有任何UI和副作用。这意味着相同的输入（state、action），reducer函数无论执行多少遍始终会返回相同的输出（newState）。
// 因此通过reducer函数很容易推测state的变化，并且也更加容易单元测试。

// js 写一个 reducer 实例

const countReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};
