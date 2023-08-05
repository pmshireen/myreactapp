import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import { Box, Grid } from '@mui/material';

export default function BasicButtons() {
  return (
    <Box sx={{ border: 1, borderBottomColor: 'grey.500',pt: 3,pb: 1}}>
      <Stack spacing={2} direction="row">
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={3}>
              <Button variant="text">Hotels</Button>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Button variant="text">Motels</Button>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Button variant="text">Resorts</Button>
            </Grid>
        </Grid>
      </Stack>
  </Box>
);
}
