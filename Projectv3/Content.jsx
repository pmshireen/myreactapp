import React, { useState } from "react";
import { Typography, Grid, Rating,Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CoffeeIcon from '@mui/icons-material/Coffee';

function Content({ hotel }) {
  const [value, setValue] = useState(2);

  return (
    <div>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '13px', lineHeight: 'normal', fontWeight: 700, fontStyle: 'normal', marginTop: 1.5 }}>
            Starting from
          </Typography>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 'bold', color: '#FF8682', marginLeft: 0 }}>
            <subheader> $104/night</subheader>
          </Typography>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '13px', marginLeft: 3 }}>
            excl. tax
          </Typography>
        </Grid>

        <Grid item sx={{ textAlign: 'left', marginTop: -7.5, marginBottom: 2 }}>
          <Typography sx={{ fontFamily: 'TradeGothic LT Extended', fontSize: '20px', lineHeight: 'normal', fontWeight: 700, fontStyle: 'normal', marginTop: -3 }}>
            mnklnk;n;kn
          </Typography>
        </Grid>

        <Grid container direction="row" alignItems="center">
          <Grid item sx={{ textAlign: 'left' }}>
            <LocationOnIcon />
          </Grid>

          <Grid item sx={{ textAlign: 'left', marginBottom: 2, marginTop: 1 }}>
            <Typography color={'var(--blackish-green, #121)'} sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: 'normal', fontWeight: 500, fontStyle: 'normal' }}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </Typography>
          </Grid>

          <Grid container direction="row">
            <Grid item sx={{ marginBottom: 3 }}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>

            <Grid item sx={{ flexDirection: 'row' }}>
              <Typography sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: 'normal', fontWeight: 500, fontStyle: 'normal', marginTop: 0.5 }}>
                5 Star Hotel
              </Typography>
            </Grid>

            <Grid item sx={{ textAlign: 'left', marginLeft: 10, fontSize: 14 }}>
              <CoffeeIcon size="small" />
              <Grid sx={{ marginLeft: 4, marginTop: -3 }}>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: 'normal', fontWeight: 500, fontStyle: 'normal' }}>
                  20+ Amenities
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button variant="outlined" sx={{ marginTop: -1, height: '40px' }}>
            4.2
          </Button>
          <Grid item sx={{ marginTop: -1, pl: 1 }}>
            <b>Very Good</b> 371 reviews
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
