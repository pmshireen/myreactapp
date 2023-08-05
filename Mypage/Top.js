import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rangemark from './Rangemarking';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
export default function Top({selectedPrice,changePrice}){
    return(
    <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center" >
            <Grid item xs={12}>
                 <Typography gutterBottom variant="h6" component="div" sx={{fontStyle: 'TradeGothic', fontWeight:'bold'}}>Filter</Typography>
            </Grid> <br></br>
            <Grid item xs={11}>
                 <Typography gutterBottom variant="h6" component="div" sx={{fontStyle: 'Montserrat',fontWeight:'bold'}}> Price </Typography>
            </Grid>
            <Grid item> < ExpandLessOutlinedIcon  /> </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2" sx={{width:297}}>
           < Rangemark value = {selectedPrice} changePrice={changePrice} />
        </Typography>
    </Box>
); }