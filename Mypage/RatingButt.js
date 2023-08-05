import React  from "react";
import { Button,ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material';
import { styled } from '@mui/material/styles'

export default function RangeButt({options,value,selectRating})
{
    

    const Buttonstyle = styled(ToggleButton)({
        marginLeft: "0.6rem",
        fontSize: 15,
        minWidth: 34,
        paddingLeft: "0.3rem",
        paddingRight: "0.3rem",
        paddingTop: "0.3rem",
        paddingBottom: "0.3rem",
        marginTop: "0.1rem",
        marginLeft: "0.2rem",
        marginRight: '0.8rem',
        color: 'black',

    })
    // const handleClick =(e) =>{
    //     // console.log(e.target.value);
    //    const ratingValue = e.target.value;

    // }

    return(
        <div>
            <ToggleButtonGroup
                value = {value}
                exclusive
                onChange = {(e)=>selectRating(e.target.value)}
            >
                {options.map(({label,id,value})=>(
                    <Buttonstyle   variant="outlined" key = {id} value = {value}>
                        {label}
                    </Buttonstyle>
                ))}
            </ToggleButtonGroup>
        </div>                 
    );
}