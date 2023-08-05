import React from "react";
import { Box ,Card} from "@mui/material";
import ViewButton from "./ViewButton";
import FavIcon from "./FavIcon";
function FavAndView({hotelid}){
    // console.log(hotelid)
    return(
    <Box sx ={{ width: 556,height : 88,pt: 3,elevation: 0}}>

        <Box m ={1} display = "flex" justifyContent= "space-between">
             <FavIcon hotelId = {hotelid}/>
             <ViewButton hotelId = {hotelid}/>
        </Box>
    </Box>
    );

}
export default FavAndView;