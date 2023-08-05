import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Slider } from '@mui/material';
import Check from './Check';
import { AmentData } from './Components';
import Amenties from './Amenties';

export default function Top4({ament,changeAment}){
return(
    <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center" >
               <Grid item xs={11}>
                     <Typography gutterBottom variant="h6" component="div" sx={{fontStyle: 'Montserrat',fontWeight:'bold'}}> Rating  </Typography>
               </Grid>
               <Grid item ><ExpandLessOutlinedIcon  /> </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
                < Amenties options = {ament}
                        
                           changeAment = {changeAment}
                 />
          </Typography>
    </Box>
);
}