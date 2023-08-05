import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';

export default function Check({options,changeChecked}) {
    // const {label,id,checked} = value;
    // console.log("options",options);
        const FormStyle = styled(FormControlLabel)({
        '& .MuiFormControlLabel-label': { fontSize: '20px' ,color:'black'},
        '& .MuiSvgIcon-root': { fontSize: 30 ,color:'black'} 
    })
    
return(
        <div>
            {/* <FormGroup >
            <FormStyle  control={<Checkbox   />} label="Free breakfast" />
            <FormStyle control={<Checkbox   />} label="Free parking" /> 
            <FormStyle control={<Checkbox   />} label="Free internet" />
            <FormStyle  control={<Checkbox   />} label="Free airportshuttle" />
            <FormStyle  control={<Checkbox   />} label="Free cancellation" />
            </FormGroup> */}
    <FormGroup>
        {options.map((item) => (    
          <FormStyle 
            key={item.id} 
            control={
              <Checkbox 
                checked={item.checked} 
                onChange={() => changeChecked(item.id)}
              />
            }
            label={item.label}
          />
        ))}
    </FormGroup>
        </div>
    );
}
