import React , { useContext } from 'react';
import Child from './child';
import { CountContext } from './grandFather';

const Father = ()=>{
    const count = useContext(CountContext)
    return <div>
        <p>Father : 我是父亲，我拿到祖父的count数值是{count}</p>
        <Child />
    </div>
}

export default Father;