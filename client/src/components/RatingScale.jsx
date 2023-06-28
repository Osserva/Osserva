import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import actions from "../redux/actions/actions";

const dispatch = useDispatch();

function RatingScale({ _id , rating}) {

  return (
    <div id="ratingScale">
      <Rating
        name="simple-controlled"
        size="large"
        value={rating}
        onChange={(event) => {
          dispatch(actions.updateRating({_id, rating: event.target.value}));
        }}
      />
    </div>
  )
}

export default RatingScale;