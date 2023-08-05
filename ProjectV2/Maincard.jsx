import { Card, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Media from "./Media";
import Divider from "@mui/material/Divider";
import Content from "./Content";
import FavAndView from "./FavAndView";

function Maincard({ data }) {
  return (
    <Container sx={{ overflow: "auto", height: "calc(100vh - 100px)" }}>
      {data.map((hotel) => (
        <Card sx={{ display: "flex", margin: 1, height: 300, elevation: 4, width: 830 }}>
          <Media imageUrl={hotel.images[0]} />
          <Grid container rowSpacing={2}>
            <Content items1={hotel} />
            <Divider variant="middle" />
            <FavAndView hotelid = {hotel._id} />
          </Grid>
        </Card>
      ))}
    </Container>
  );
}
export default Maincard;
