import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { IconButton } from "@mui/material";
import { DeleteOutline, DeleteOutlineOutlined, DeleteOutlineRounded, DeleteOutlined } from "@mui/icons-material";

function Notecard() {
    return(
        <div>
            <Card>
                <CardHeader
                    action = {
                        <IconButton onClick = {()=> console.log("delete")}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                   
                />
            </Card>
        </div>

    );

}
export default Notecard;
