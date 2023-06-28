import React from 'react';
import { useState, useEffect } from 'react';

function FocusItem({ _id, name , rating}) {

  return (
    <div id="focusItem">
      <h2>{name}</h2>
      <RatingScale _id = {_id} rating = {rating} />
    </div>
  );
}

export default FocusItem;

