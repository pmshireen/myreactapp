import React from "react";
import { useState } from "react";

function Quizapp() {
 
    const [data , setData] =  useState([]);
    const [mark, setMark] = useState(0);
    const ans = ["", ""];

    const inputChange = (e)=>{
        // setData(e.target.value);
        // console.log(e.target.name);
        
        
        setData([...data, e.target.value]);
        if(e.target.value == "check1"){
            ans[0] = e.target.value;
        }
        else if(e.target.value == "check2") {

            ans[1] = e.target.value;
        }

        
        console.log(ans);
        // console.log(typeof(data));
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        // alert("You have clicked " + data)
        // console.log(mark);
        // if(data == "Haryana"){
        //     setMark(mark+1)
        // }
        // if(data == "Indore"){
        //     setMark(mark+1)
        // }


        return (
            <div>
            {
                data.map((item ,index) => {
                    <h5>key ={index}</h5> 
                    item == "Haryana" ? setMark(mark+1):setMark(mark)
                })
            }
            </div>
        );

    }
    return(
        <div>
            <h4>Quiz App</h4>
    
            <form onSubmit={handleFormSubmit}>

                <label>what is the capital of Afghan ?</label><br/>
                <input type = "radio" name = "check1" value = "Haryana" onClick={inputChange} /> Haryana<br/>
                <input type = "radio" name = "check1" value = "Indore" onClick={inputChange}/>Indore<br/>
                <input type = "radio" name = "check1" value = "Lahore" onClick={inputChange}/>Lahore<br/>
                <input type = "radio" name = "check1" value = "Gujarat" onClick={inputChange}/>Gujarat<br/>


                <label>what is the capital of Afghan ?</label><br/>
                <input type = "radio" name = "check2" value = "Haryana" onClick={inputChange} /> Haryana<br/>
                <input type = "radio" name = "check2" value = "Indore" onClick={inputChange}/>Indore<br/>
                <input type = "radio" name = "check2" value = "Lahore" onClick={inputChange}/>Lahore<br/>
                <input type = "radio" name = "check2" value = "Gujarat" onClick={inputChange}/>Gujarat<br/>

                <button type = "submit">SUBMIT</button>


            </form>

            <h3>You have Selected : {data}   <br/> marks: {mark} </h3>
            <h4></h4>
        </div>

    );
}

export default Quizapp;