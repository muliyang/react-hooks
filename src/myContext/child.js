import React , {useContext} from 'react';
import { CountContext } from './grandFather';


const Child = ()=>{
    const count = useContext(CountContext)
    return <div>
        Child : 我是最小的，我拿到祖父的count数值是{count}
    </div>
}

export default Child;