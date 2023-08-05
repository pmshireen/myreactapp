import React from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Container, Typography} from '@mui/material';
import {Button} from '@mui/material';
import { ButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';


function Materialui(){
    return(
        <div>
            <Typography 
                // variant ="h4"
                // color="secondary"
                // align="center"  
                // component = "h1" 
                gutterBottom
            >
                Create a note
            </Typography>

            <Button type = "submit" variant = "contained">Submit</Button>
            <Button type = "submit">Submit</Button>

            <ButtonGroup color = "success" variant = "contained" >
                <Button endIcon = {<DeleteIcon />}>One</Button>
            </ButtonGroup>

            <IconButton aria-label="delete" disabled color="primary">
               <DeleteIcon /> 
            </IconButton>

            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            {/* <Container></Container> */}

        </div>

    );
}
export default Materialui;