import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Slider } from '@mui/material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import RatingButt from './RatingButt';
import { ratingList } from './Components';

export default function Top2({selectedRating,selectRating}){

return(
    <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center" >
            <Grid item xs={11}>
                <Typography gutterBottom variant="h6" component="div" sx={{fontStyle: 'Montserrat',fontWeight:'bold'}}>Rating  </Typography>
            </Grid>
        <Grid item > < ExpandLessOutlinedIcon  /> </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
            < RatingButt 
                options = {ratingList}
                value = {selectedRating}
                selectRating = {selectRating}
            />
        </Typography>
    </Box>
);
}