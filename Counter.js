import React, { useEffect, useState } from "react";


function Counter(){


    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
    //    document.title = 'Count' +count;
          setCalculation(()=> count*2);         
      } , [count]);

    return(
        <div>
            <h4> Count : {count}</h4>
            <button type = "button" onClick={()=>{setCount(count+1)}}>Increment</button>
            <p>calculation:{calculation}</p>
        </div>      

    );
}

export default Counter;