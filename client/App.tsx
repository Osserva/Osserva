import React, { FormEvent, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setFoci } from './src/redux/actions/actions';

//hamburger menu
//open modal
//our focus item groupings
//note
//submit
const dispatch = useDispatch();

const App: React.FC = () => {
  //! need endpoint from backend team
  try {
    const data = axios.get('endpoint');

    dispatch(setFocuses(data));
  } catch (err) {}

  return <div>hello</div>;
};

export default App;
