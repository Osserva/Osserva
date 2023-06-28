import React from 'react';
import { useState, useEffect } from 'react';

export default function FocusItem({ focusItem }) {
  return (
    <div id="focusItem">
      <h2>{focusItem.focus_name}</h2>
      <RatingScale />
    </div>
  );
}
