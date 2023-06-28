import React from 'react';
import { useState, useEffect } from 'react';
import RatingScale from './RatingScale';
import styles from './FocusItem.module.scss'

function FocusItem({ _id, name, rating }) {
  return (
    <div id='focusItem' className={styles.focusItem}>
      <h2 className={styles.heading}>{name}</h2>
      <RatingScale _id={_id} rating={rating} />
    </div>
  );
}

export default FocusItem;
