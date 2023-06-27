import React, { FormEvent, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//hamburger menu
//open modal
//our focus item groupings
//note
//submit

const App = () => {
  const [modalOpen, setModal] = useState(false)
  const focusItems = useSelector((state)=>state.getItems)
};

export default App;
