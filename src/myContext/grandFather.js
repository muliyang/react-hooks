import React , { createContext, useState } from 'react';
import Father from './father';

export const CountContext = createContext();

const GrandFather = ()=>{
    const [count , setCount] = useState(0);
    return <div>
        <p>GrandFather : 祖父的count数据是 {count}</p>
        <p>
            <button onClick={()=>setCount(count + 1)}>add button</button>
        </p>
        <CountContext.Provider value={count}>
            <Father />
        </CountContext.Provider>
    </div>
}

export default GrandFather;