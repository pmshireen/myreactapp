import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
export default function Amenties({options,changeAment})
{
        
        const FormStyle = styled(FormControlLabel)({
        '& .MuiFormControlLabel-label': { fontSize: '20px' ,color:'black'},
        '& .MuiSvgIcon-root': { fontSize: 30 ,color:'black'} 
    })
return(
        <div>
           <FormGroup>
        {options.map((item) => (    
          <FormStyle 
            key={item.id} 
            control={
              <Checkbox 
                // value = {ament}
                checked={item.checked} 
                onChange={() => changeAment(item.id)}
              />
            }
            label={item.label}
          />
        ))}
    </FormGroup>
         
        </div>
    );
}

