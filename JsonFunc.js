import React, { useState , useEffect } from "react";

const JsonFunc =()=>{
    const [data ,setData] = useState({"0" : {"id":"0","name":"indhu","email":"test@gmail.com"}});

    const url = "http://localhost:3031/users";

    // useEffect(() => {
    //     fetchLocalData();
    //   }, [] );

    const fetchLocalData = async()=>{
        try{
                // console.log("Try block");
                await fetch(url)
                .then(response => response.json())
                .then( (res) =>{
                    console.log("success",typeof(res));
                    setData(res)
                })
                .catch((error) =>{
                    console.log("My error ",error);
                })
            }
        catch(error){
                console.log("My error ",error);
        }    
            
        
    }
    return(
        <div>
            <h4>api Example</h4>
            <h3>{data[0]["id"]}</h3>
            <h3>{data[0]["name"]}</h3>
            <h3>{data[0]["email"]}</h3>
            <button type = "button" onClick ={fetchLocalData}>Button</button>

        </div>

    );

}

export default JsonFunc;