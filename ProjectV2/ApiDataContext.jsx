import React, { useEffect } from "react";
import Maincard from "./Maincard";
import { Button } from "@mui/material";
import { useState} from "react";
function FetchData(){

  const [hotelData,setHotelData] = useState([]);

  const handleHotelData = async () => {
  try{
      console.log("try");
      const response =  await fetch("http://localhost:3200/hotels/findAll")
      .then(response => response.json())
       setHotelData(response);
       console.log(hotelData)
      
    } 
    catch (error) {
      console.error("Error in fetching", error);
    }
  };
 

  return(
    <>    
      <Button onClick = { handleHotelData}>Click</Button>     
      <Maincard data = {hotelData} /> 
    </>

  )
  }

export default FetchData ;