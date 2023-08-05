import { Box, Card, CardMedia, Container } from "@mui/material";
import React, { useContext } from "react";
import ApiDataContext  from "./ApiDataContext";
function Media({imageUrl}){
    // console.log(props.data.images[0])
   

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box  sx={{width: 300, height:300}}>
                    <img src={imageUrl} alt="Hotel" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
        </Box> 

    );
}
export default Media;