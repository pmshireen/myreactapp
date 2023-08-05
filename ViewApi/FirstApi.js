import React, { useState } from "react";
import ApiList from "./ApiList";
import { Button } from "@mui/material";



function FirstApi() {
  const [allTasks, setAllTasks] = useState([]);
  
  const handleViewAllTasks = async () => {
    try {
        console.log("try");
      const response =  await  fetch("http://localhost:5000/app/findAll")
      .then(response => response.json())
    
      setAllTasks(response);
      console.log("allTasks",allTasks)
    } catch (error) {
      console.error("Error in fetching", error);
    }
  };

  return (
    <div>
      <Button onClick={() => handleViewAllTasks()}>Button</Button>
      <ApiList allTasks={allTasks} />
      
    </div>
  );
}

export default FirstApi;
