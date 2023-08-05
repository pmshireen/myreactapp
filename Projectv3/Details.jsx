import { Grid } from "@mui/material";
import React from "react";
import Content from "./Content";
import FavAndView from "./FavAndView";
import Divider from '@mui/material/Divider';

function Details({items}){
    //  console.log("Details",items)
    //  if (!Array.isArray(items) || !items.length) {
    //     console.log("No items to display") 
    //   }
    return(
        <>
            {/* {items.map((contents)=>{
            <div>
                <Content key = {contents.id} contentsitem = {contents}/> 
                <Divider variant = "middle"/>
                <FavAndView  key = {contents.id} contents = {contents}/>
            </div>
            })}
             */}
           
        </>

    );
}
export default Details;