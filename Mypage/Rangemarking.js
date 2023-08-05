import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Rangemark({value,changePrice}) {

   console.log(value);

 
  // Style for Slider
const PrettoSlider = styled(Slider)({     
    color: '#112211',
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#98FB98',
        border: '2px solid #98FB98',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',},
    
    '&:before': {
        display: 'none',
      },
    }

  })
return (
   <div>
      <PrettoSlider
        size='small'
        value={value}
        onChange={changePrice}
        defaultValue={50}  min={50} max={1200}    />
  
        <div  style ={{display: 'flex'}}>
            <Typography gutterBottom   >
            ${value[0]}
            </Typography>
            <Typography   sx={{marginLeft:30}}>
            ${value[1]}
            </Typography>

        </div>
    </div>
  );
}
export default Rangemark;



// function valuetext(value) {
//      return `{'$' + value}`;
// //   return'{  $${value[0]}}';
// }
 // const getMovingTextPosition =() =>
  // {
  //   const rangeWidth =300;
  //   const rangeStart =value[0];

  //   const rangeEnd=value[1]; 
  //   const movingTextPosition =(rangeEnd - rangeStart) * (rangeWidth/100) +rangeStart;
  //   return movingTextPosition;
  // }
   // getAriaLabel={() => 'Temperature range'}
   
        // valueLabelDisplay="auto"
         // getAriaValueText={valuetext}
            {/* <Slider
  getAriaLabel={() => 'Temperature range'}
  value={value}
  onChange={handleChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
/> */}
  {/* <span>{`$${value[0]} - $${value[1]}`}</span> */}