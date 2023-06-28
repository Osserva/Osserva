import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import actions from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

function RatingScale({ _id, rating }) {
  const dispatch = useDispatch();
  const focus_id = _id;
  return (
    <div id='ratingScale'>
      <Rating
        name='simple-controlled'
        size='large'
        value={rating}
        onChange={(event) => {
          dispatch(
            actions.updateRating([focus_id, Number(event.target.value)])
          );
        }}
      />
    </div>
  );
}

export default RatingScale;
