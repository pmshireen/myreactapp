import React from "react";
import { useState } from "react";

function Form() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [textarea, setTextarea] = useState('');
    const [qualification,setQualification] = useState('');


    const handleSubmit =(e) => {
        e.preventDefault();
        alert('U have Submitted');

    }
    function changeFirstName(e){
       setFirstName(e.target.value);
    }
    function changeLastName(e){
        setLastName(e.target.value);
    }
    function changeEmail(e) {
        setEmail(e.target.value);

    }
    function changePassword(e){
        setPassword(e.target.value);
    }
    function changeAddress(e){
        setTextarea(e.target.value);
    }
    function changeQualification(e){
        setQualification(e.target.value);

    }

    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
            <div className  ="input">   
            <h1>Forms</h1>    
            <label htmlFor = 'firstName'>First Name:</label>
            <input type ="text" name ="firstName" id ="firstName" 
             onChange={changeFirstName} /><br/>

            <label htmlFor = 'lastName'>Last Name:</label>
            <input type ="text" name ="lastName" id ="lastName" onChange={changeLastName}/><br/>

            <label htmlFor = 'lastName'>Password:</label>
            <input type = "password" name = "password" id = "password" onChange={changePassword}/><br/>

            <label htmlFor = 'lastName'>Email:</label>
            <input type = "email" name = "email" id = "email" onChange={changeEmail}/><br/><br/>

            <label htmlFor = 'textarea' >Address</label>
            <textarea rows = "8" cols = "18" onChange={changeAddress}/>
            </div><br/>

            <label htmlFor = 'dropdown' >Qualification</label>
            <select value = "" onChange={changeQualification}>
                <option value = "B.E" >B.E</option>
                <option value = "BCA" >BCA</option>
                <opton value = "MCA">MCA</opton>
            </select>

            
            <div className = "button">
            <input type = "submit" value = "submit"/></div>
            </form>

            
        </div>


    )
}



export default Form