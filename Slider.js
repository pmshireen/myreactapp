import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const RRangeSlider = () => {
  const [value, setValue] = useState([20, 80]); // Initial range values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="body2">Top Content</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Typography variant="body2">
        Range: {value[0]} to {value[1]}
      </Typography>
    </div>
  );
};

export default RRangeSlider;
