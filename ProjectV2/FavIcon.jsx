import { Box, Button, Card, CardMedia, Container, IconButton } from "@mui/material";
import React from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from "react";
import axios from "axios";


function FavIcon({hotelId}){
     console.log(hotelId)
    const [isFilled, setIsFilled] = useState(false);
    const userId = "64cb50827767115059b3eaa7"

    const handleIconClick =() =>{
            // console.log(hotelId)
            setIsFilled(!isFilled);
            const url = `http:/localhost:3200/auth/users/${userId}/favourites/${hotelId}`;
            console.log(url)
            const method = isFilled ? 'POST' : 'DELETE';
            axios({method,url,})
            .then(response => {               
                console.log('Request successful:', response);
            })
            .catch(error => {                
                console.error('Error making request:', error);        
                setIsFilled(isFilled);
            });
        }  


    return(
        <IconButton variant = "outlined"sx ={{maxHeight: '33px',width: 25,ml:4}} >
            <Button onClick = {handleIconClick} variant="outlined">
                {isFilled ? <FavoriteOutlinedIcon style={{ color: 'black' ,fontSize: 24}}/> : 
                 <FavoriteBorderOutlinedIcon  />
                }
            </Button>
        </IconButton>
    );
}
export default FavIcon;