import React ,{useState} from "react";
import {Rating} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Card,CardMedia,CardContent,Button, Divider,Typography,Box,IconButton} from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function Practice1(){
  const [value, setValue] = useState(2);
  const [isFilled, setIsFilled] = useState(false);
  const handleIconClick =() =>{
      setIsFilled(!isFilled);
  } 
  
    return(

              <div>
                <Card sx={{ display: 'flex', margin: 1, height: 300, elevation: 4, width: 830 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box  sx={{width: 300, height:200}}>
                            <img src= "hotel.png" alt="Hotel" 
                            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                </Box> 
                  <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Hotel Name
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          address
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          5 star
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
                          <CoffeeIcon size="small" sx={{ mt: -1 }} />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            10+ Amenities
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                          4.2
                        </Button>
                        <Typography variant="body2">
                          <b>Very Good </b>  3 reviews
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider variant="middle" />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <IconButton onClick={handleIconClick} variant="outlined">
                        <Button variant="outlined">
                          {isFilled ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon color="black" />}
                        </Button>
                      </IconButton>
                      <Button
                        size="large"
                        variant="outlined"
                        sx={{ width: '420px', height: '40px', backgroundColor: '#8DD3BB' }}
                      >
                        View Place
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </div>
        
          
        

    );
}

export default Practice1;