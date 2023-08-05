import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

function Practice(){
    return(

        <Box sx={{height : 400, width : 400, backgroundColor:'blue'}}>
            <Card>
                    <CardMedia
                        component="img"
                        sx={{ width: 285, height:400 }}
                        image="tower.jpg"
                        alt="Hotel"
                    />
            </Card>

        </Box>

    );
}
export default Practice;