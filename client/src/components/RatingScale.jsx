import React from "react";
import { useState, useEffect } from "react";
import { Typography, Rating } from '@mui/material';


function RatingScale({ focusItem }) {
  

  return (
    <div id="ratingScale">
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}