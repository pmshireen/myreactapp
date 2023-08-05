import { Card ,Grid,Box} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Media from "./Media";
import Content from "./Content";
import FavAndView from "./FavAndView";

function MainCard({ hotelData }) {
  return (
    <>
      <div>
        {hotelData.map((hotel) => (
          <div >
            <Card sx={{ display: 'flex', margin: 1, height: 300,elevation : 4, width: 830}} ></Card>               
                <Media imageUrl={hotel.images[0]} />             
                <Grid container rowSpacing={2}>
                    <Grid item xs ={12}>
                      <Content items1={hotel._id} />
                    </Grid>
                    <Divider variant="middle" />
                    <FavAndView />
                </Grid>
            <Card/>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainCard;
