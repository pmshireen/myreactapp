import React, { useEffect } from "react";
import { useState } from "react";

function Button(){

    const[color,setColor] = useState("red");
    const[count ,setCount] = useState(0);

    const handleColorChange = ()=>{
        if(count == 0){
            setColor("blue");
            setCount(count+1);
        }
        else if(count == 1){
            setColor("yellow");
            setCount(count+1);
        }
        else if(count == 2){
            setColor("green");
            setCount(0);
        }

    }

    useEffect (()=>{
        document.getElementById("btn-color").style.backgroundColor = color
    } ,[color]);

    return(
        <div>
            <h4>Color change</h4>

            <button 
                type = "submit" 
                id = "btn-color"
                onClick={handleColorChange}> {color}
            </button>

        </div>


    );

}

export default Button;