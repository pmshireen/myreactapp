import React from "react";
import { Button, Typography } from "@mui/material";

function ViewButton(){
    return(
        <Button  size ="large" variant = "outlined"  disabled
            sx =
                {{
                    width: '600px',height: '38px',
                    backgroundColor: '#8DD3BB',
                    marginRight: '28px',
                    marginLeft: '50px',
                    marginTop:-0.3,
                    
                  }}>
               <Typography color = {'#112211'} 
                    sx ={{fontFamily: 'Montserrat',  
                    fontSize: '16px',lineHeight:"normal",fontWeight: 500,fontStyle: "normal"}}
                    >
                View Place
                </Typography> 
        </Button>

    );
}

export default ViewButton;