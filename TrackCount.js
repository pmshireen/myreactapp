import React, { useEffect, useState } from "react";
import { useRef } from "react";


function TrackCounter(){

    const[inputValue , setInputValue] = useState("Jhon");
    const preValue = useRef('');

    useEffect(()=>{
        preValue.current = inputValue;
    },[inputValue]);
    

    return(
        <div>
            <input type = "text"
                   value = {inputValue}
                   onChange={ (e) =>setInputValue(e.target.value)}
            />
            <h4>Current value:{inputValue}</h4>
            <h4>Previous value :{preValue.current}</h4>
        </div>
    );
}

export default TrackCounter;