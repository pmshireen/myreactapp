import React from "react";
import { useState } from "react";

function ArrayMethods() {

const[ans,setAns] = useState([]);

const person = [{name : "Abi", age: 14},{name: "Jake", age: 44},{name : "Steve", age: 19},{name: "harry",age:17}];

function fun1 () {
    console.log("for loop");
    for(let i=0;i<person.length;i++) {
    //   console.log(person[i].age);
        if(person[i].age < 20){
            setAns(ans => [...ans,person[i].name]);
            console.log(person[i].name);
        }
    }
}

const fun2 =()=>{

    

}

    return(
        <div>
            <h4>Hii</h4>
            <button type ="submit" onClick={fun1}>Click</button>
             
            <h5>Name:{ans}<br/></h5>

            {/* <button type ="button" onClick={fun2}>Click</button> */}

        </div>
    );
}
export default ArrayMethods;