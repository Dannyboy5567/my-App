import React,{ useState,useEffect } from 'react';
import { render } from 'react-dom';

const counter = () => {
    const [count,setCount] =useState(0);
    useEffect(() =>{
        console.log('count changed: ${count}');
          }, [count]);
          
return(
    <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount(count+ 1)}>Increase</button>
        <button onClick={() => setCount(count -1)}>Deacrease</button>
     </div>
    );
};
export default counter;