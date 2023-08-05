import React, { useState } from "react";

function Count(props){
    const [count , setCount] = useState(0);


    const Increment = ()=>{
         //setCount(count + 1);
        if(count < 5)
          setCount(count+1);

        else 
         setCount(0);
         
    }
    const Decrement = ()=>{
        setCount(count-1);
    }
    
    return(
        <div>
            <h3>{props.title}</h3>
            <h4>Count : {count}</h4>
            <button type = "button" onClick={Increment}>Increment</button><br></br>
            <button type = "button" onClick={Decrement}>Decrement</button>
        </div>

    );
}
export default Count;