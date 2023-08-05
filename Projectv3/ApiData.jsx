import React ,{useState}from "react";
import { Button } from "@mui/material";
import MainCard from "./MainCard";

function ApiData(){
    const [hotelData, setHotelData] = useState([]);
    const handleHotelData = async () => {
        try{
            console.log("try");
            const response =  await fetch("http://localhost:5000/app/findAll")
            .then(response => response.json())
            setHotelData(response);   
        } 
        catch (error) {
            console.error("Error in fetching", error);
        }
    };

    return(
        <>
            <Button onClick = {handleHotelData}>Click</Button>
            <MainCard hotelData = {hotelData}  />
        </>
    );
}
export default ApiData;