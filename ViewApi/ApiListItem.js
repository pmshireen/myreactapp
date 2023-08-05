import React from 'react';
import { useState } from 'react';
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import CoffeeIcon from '@mui/icons-material/Coffee';

const ApiListItem = ({item}) => {

  const [value, setValue] = useState(item.hotelType);
  const [isFilled, setIsFilled] = useState(false);
  const handleIconClick =() =>{
      setIsFilled(!isFilled);
  } 
  

   
  return(      
  <div >
    <Card sx={{ display: 'flex', margin: 1, height: 300,elevation : 4, width: 830}}>
     
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ width: 300, height:400 }}
              image = {item.images[0]}
              alt="Hotel"
            />
      </Box>
             <Grid> 
            
                <Box sx = {{height: 200}}>
                <Grid container rowSpacing={2}>
                  <CardContent>
               <Grid>
                     <Grid item sx={{ flex: '1 0 auto',marginLeft: 59}} > <p>{item.ratePerNight}</p>  </Grid>
                     <Grid item sx = {{textAlign :  'left',marginTop: -7,marginBottom: 2 }}> <b>{item.hotelName} </b> </Grid>
               
                     <Grid container direction="row" alignItems="center">   
                        <Grid item sx={{ textAlign: 'left'}}><LocationOnIcon/>
                        </Grid>
                        <Grid item sx={{ textAlign: 'left',marginBottom: 2,marginTop: 1}}>
                             {item.location.address}
                        </Grid> 
               
               
                <Grid container direction = "row">  

                      <Grid item sx = {{marginBottom: 3}}>
                           <Rating
                               name="simple-controlled"
                               value={value}
                               onChange={(event, newValue) => {
                               setValue(newValue);  }} />
                       </Grid>    

                        <Grid item sx = {{flexDirection : 'row' }}>{item.hotelType} star</Grid>
                        <Grid item sx = {{textAlign :  'left',marginLeft: 10,fontSize: 14}}>
                                <CoffeeIcon size = "small"/>
                                <Grid sx = {{marginLeft: 4,marginTop: -3}}>
                                  {item.amenities.length}+ Aminities
                                </Grid> 
                        </Grid>  

                </Grid> 
                <Grid container columnSpacing={1} >
                  <Button variant="outlined" sx = {{marginTop: -1}}>{item.rating}</Button>
                  <Grid item sx ={{marginTop: -1}}> <b> {item.normalReview} </b> {item.numReviews} reviews </Grid> 
                </Grid>
              </Grid>
            </Grid>
      </CardContent>
      </Grid>
      </Box>
     
                 <Divider variant = "middle" />

                  <Grid item>
                        {/* <Card sx ={{ width: 556,height : 88,pt: 3,elevation: 0}}> */}
                            <Box  sx = {{marginTop: 4}}  display = "flex" justifyContent= "space-between">
                                
                                
                                    <IconButton  onClick = {handleIconClick} variant = "outlined"sx ={{maxHeight: '33px',width: 25,ml:4}} >
                                    <Button  variant="outlined">{isFilled ? <FavoriteIcon/> : <FavoriteBorderIcon color = 'black' />}
                                    </Button>
                                    </IconButton>
                                
                                <Button 
                                size ="large"
                                    variant = "outlined" 
                                    sx ={{width: '420px',height: '40px',backgroundColor: '#8DD3BB',marginRight: '200px',marginLeft: '50px',marginTop:-0.3}}>
                                        View Place
                                </Button>
                            </Box>
                        {/* </Card> */}
                  </Grid>

     </Grid>
  </Card>
    
  </div>
  );
}

export default ApiListItem;