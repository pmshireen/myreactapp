import React from 'react';
import { useState } from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import '../Roomdetail.css';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// import './styles.css';

const ListItem = ({item: { coverSrc, title, price, deliveryFee,hotelName, ratePerNight, rating },
}) => {

    const [value, setValue] = useState(rating);
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
                        sx={{ width: 285, height:400 }}
                        image={coverSrc}
                        alt="Hotel"
                    />
                </Box>
                <Grid >
                    <Grid container rowSpacing={2}>
                        <Card sx = {{height: 220}}>
                            <CardContent>
                                <Grid item sx={{ flex: '1 0 auto',marginLeft: 59}} >
                                   <p>${ratePerNight}</p>
                                </Grid>
                                <br/>
                            
                                <Grid item sx = {{textAlign :  'left',marginTop: -7,marginBottom: 2 }}>
                                   <b>{title} </b>
                                </Grid>

                                <Grid container direction="row" alignItems="center">   
                                    <Grid item sx={{ textAlign: 'left'}}><LocationOnIcon/>
                                    </Grid>

                                    <Grid item sx={{ textAlign: 'left',marginBottom: 2}}>
                                        {hotelName}
                                    </Grid>   

                                    <Grid container direction = "row">  
                                        <Grid item sx = {{marginBottom: 3}}>
                                            <Rating
                                            name="simple-controlled"
                                            value={rating}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }} />
                                        </Grid>    

                                        <Grid item sx = {{flexDirection : 'row' }}>star</Grid>
                                        <Grid item sx = {{textAlign :  'left',marginLeft: 10,fontSize: 14}}>
                                            <CoffeeIcon/>20+ Aminities
                                        </Grid>  

                                    </Grid>  
                                    <Button variant="outlined" sx = {{marginTop: -1}}>4.2</Button>
                                    <Grid item sx ={{marginTop: -1}}><b>Very Good</b>371 reviews</Grid> 
                                </Grid>
                           </CardContent>

                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx ={{ width: 556,height : 88,pt: 3,elevation: 0}}>
                            <Box m ={1} display = "flex" justifyContent= "space-between">
                                
                                
                                    <IconButton  onClick = {handleIconClick} variant = "outlined"sx ={{maxHeight: '33px',width: 25,ml:2}} >
                                    <Button variant="outlined">{isFilled ? <FavoriteIcon/> : <FavoriteBorderIcon color = 'black' />}
                                    </Button>
                                    </IconButton>
                                
                                <Button 
                                    variant = "outlined" 
                                    sx ={{maxHeight: '45px',width: 380 , backgroundColor: '#8DD3BB',mr: 2}}>
                                        View Place
                                    </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Card>
    
  </div>
  );
}

export default ListItem;