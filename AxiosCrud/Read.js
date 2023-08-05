import React, { useEffect,useState } from "react";
import {Button, Table} from 'semantic-ui-react';
import axios from "axios";
import { API_URL } from "../Constants/url";
import {useNavigate} from 'react-router-dom';


function Read(){
    const [apiData , setApiData] = useState([]);
    const navigate = useNavigate();

    const callGetApi = async ()=>{
        const response =  await axios.get(API_URL);
        // console.log(response);
        setApiData(response.data);
        console.log(apiData);

    }

    const deleteId = async (id)=>{
        console.log(id);
        await axios.delete(API_URL + id)
        callGetApi();

    }
    const updateUser = ({firstName,lastName,checked,id})=>{
        localStorage.setItem('id',id);
        localStorage.setItem('fisrname',firstName);
        localStorage.setItem('lastItem',lastName);
        localStorage.setItem('checked',checked);\
    
        navigate('/update')



    }
    
    useEffect(()=>{
        callGetApi();
    }, []);
    
    return(
        <div>
            <h3>Read Operation</h3>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>FirstName</Table.HeaderCell>
                    <Table.HeaderCell>LastName</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {

                    apiData.map(data =>(
                        <Table.Row key = {data.id}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checked? 'checked': 'Not Checked'}</Table.Cell>
                            <Table.Cell><Button onClick={() => deleteId(data.id)}>Delete</Button></Table.Cell>
                            <Table.Cell><Button onClick={() => updateUser()}>Updat</Button></Table.Cell>
                        </Table.Row>
                    ))
                }

                
            </Table.Body>

        </div>

    );
}
export default Read;