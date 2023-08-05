import React, { useState } from "react";
import { API_URL } from "../Constants/url";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


import {Form,Button,Checkbox, Input} from 'semantic-ui-react';


function Create(){
const [firstName ,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [checked ,setChecked] = useState(false);
const navigate = useNavigate();

const postMethod =async (e) =>{
    e.preventDefault();
    await axios.post(API_URL,{
        firstName,
        lastName,
        checked
    })
    navigate('/Read');

}

    return(
        <div>
            <h4>Create Operation</h4>
            <form>
            <Form.Field>
                <label>FirstName</label>
                <input placeholder = "Enter Firstname" value = {firstName} onChange={(e)=>setFirstName(e.target.value)}/><br/>
            </Form.Field><br/>
            <Form.Field>
                <label>LastName</label><input placeholder = "Enter lastname" value = {lastName} onChange={(e) =>setLastName(e.target.value)}/><br/> 
            </Form.Field><br/>
            <Form.Field>
                <Checkbox label ="Agree terms" value = {checked} onChange={()=> setChecked(!checked)}/>
            </Form.Field><br/>
            <Button onClick={postMethod}>Submit</Button>
            </form>
        </div>

    );
}
export default Create;