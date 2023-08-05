import { Card, Container, Grid ,CardContent,Button, Divider, Typography,Box} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import {React, useState} from "react";
import { styled } from '@mui/material/styles';




function Content({items1}){
    // console.log(items1)
 // console.log(items1.hotelName)

    const TypographyStyle = styled(Typography)({
        fontFamily: 'Montserrat',
        fontSize: '16px',
        lineHeight:"normal",
        fontWeight: 500,
        fontStyle: "normal",
        color: "#112211",

    });
    const [value, setValue] = useState(items1.hotelType);

    const address = items1.location.address.lastIndexOf(",", items1.location.address.lastIndexOf(",") - 1);

    const addLine1 = items1.location.address.slice(0,address).trim();
    const addLine2 = items1.location.address.slice(address+1).trim();
    // console.log(address)


    return(
                    <Box sx = {{height: 220}}>
                            <CardContent>
                                <Grid item sx={{ flex: '1 0 auto',marginLeft: 54}} >      
                                    <Typography 
                                            sx={{ fontFamily: 'Montserrat', 
                                            fontSize: '13px', 
                                            lineHeight: 'normal', 
                                            fontWeight: 700, 
                                            fontStyle: 'normal',
                                            marginTop: 1.5}}
                                        >
                                        Starting from
                                    </Typography>
                                    <Typography 
                                        sx={{ 
                                            fontFamily: 'Montserrat', 
                                            fontSize: '16px', 
                                            fontWeight: 'bold', 
                                            color: '#FF8682',
                                            marginLeft: 0}}
                                            >
                                        {items1.ratePerNight}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: '13px',marginLeft: 3,marginTop: '-2px' }}>
                                        excl. tax
                                    </Typography>
                                   
                                </Grid>
                         
                                <Grid item sx = {{textAlign :  'left',marginTop: -7.5,marginBottom: 2 }}>
                                   <Typography 
                                            sx = {{fontFamily: 'TradeGothic LT Extended',
                                            fontSize: '20px',
                                            lineHeight:'normal',
                                            fontWeight: 700,
                                            fontStyle: 'normal',
                                            marginTop: -3}}>
                                    {items1.hotelName}</Typography>
                                </Grid>

                                <Grid container direction="row" alignItems="center">   
                                    <Grid item sx={{ textAlign: 'left'}}><LocationOnIcon/>
                                    </Grid>

                                    <Grid item sx={{textAlign: 'left',
                                                    marginBottom: 2,
                                                    marginTop:1}}>
                    
                                        <Grid item sx={{ textAlign: "left", marginLeft: 2 }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <Typography variant="address" sx={{ display: "inline" }}>
                                                    {addLine1}
                                                </Typography>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                <Typography variant="address" sx={{ display: "inline" }}>
                                                    {addLine2}
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>   

                                    <Grid container direction = "row">  
                                        <Grid item sx = {{marginBottom: 3}}>
                                            <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(newValue) => {
                                            setValue(newValue);
                                            }} />
                                        </Grid>    

                                        <Grid item sx = {{flexDirection : 'row' }}>
                                            <Typography sx = {{fontFamily: 'Montserrat',fontSize: '16px',lineHeight:'normal',fontWeight: 500,fontStyle: 'normal',marginTop: 0.5}}>{items1.hotelType} Star Hotel</Typography>
                                        </Grid>
                                        <Grid item sx = {{textAlign :  'left',marginLeft: 10,fontSize: 14}}>
                                                <CoffeeIcon size = "small"/>
                                                <Grid sx = {{marginLeft: 4,marginTop: -3}}>
                                                <Typography 
                                                    sx = {{fontFamily: 'Montserrat',
                                                    fontSize: '15px',lineHeight:'normal',
                                                    fontWeight: 500,fontStyle: 'normal'}}>
                                                {items1.amenities.length}+Aminities
                                               </Typography>
                                                </Grid> 
                                        </Grid>  

                                    </Grid>  
                                    <Button variant="outlined" sx = {{marginTop: -1, height:'40px'}}> 
                                    {items1.rating}
                                    </Button>
                                    <Grid item sx ={{marginTop: -1,pl:1}}> 
                                       {items1.numReviews == 0 ? 
                                        <b>{items1.overallReview}</b> : 
                                        <b>{items1.overallReview}{items1.numReviews}Reviews</b>
                                       }
                                      
                                    </Grid> 
                                </Grid>
                           </CardContent>

                        </Box>
                        
                   
    

    );
}
export default Content;