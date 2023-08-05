import React, { useState, useEffect } from "react";

const Advice =() =>{
    const[advice,setAdvice] = useState([]);

    
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async() =>{
        try{
            console.log("Try block");
            await fetch(url)
                .then(response => response.json())
            // .then(response => setAdvice(response.slip.advice));
            .then( (res)=>{
                console.log("success")
                setAdvice(res.slip);
                // console.log(advice["id"])
                // console.log(advice["advice"])
            })
            .catch((error) => {
                console.log("My Error", error);

            })
            // // console.log(json.slip.id);
            // setAdvice(json.slip.advice);
        }catch(error){
            console.log("error", error);
        }
    };
    return(
        <div>
            <h3>API</h3>
            <h2>{advice["id"]}</h2>
            <h2>{advice["advice"]}</h2>
            <button type="button" onClick={fetchData}>BTTN</button>
        </div>

    );
}

export default Advice;