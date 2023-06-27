import React, { FormEvent, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setFocuses } from './src/redux/actions/actions';
import { Dispatch } from 'redux';
import * as types from './src/redux/types/focusTypes';
import { Menu, MenuItem, Button } from '@mui/material';

//hamburger menu
//open modal
//our focus item groupings
//note
//submit

const App = () => {
  const [modalState, setModalState] = useState(false);

  const dispatch = useDispatch();

  //! need endpoint from backend team
  async function getData() {
    try {
      const data = await fetch('/a', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const focusItems = await data.json();

      await dispatch({ type: types.SET_FOCUSES, payload: focusItems });
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal () {
    if (modalState) setModalState(false);
    else setModalState(true);
  }

  const state = useSelector((state) => {});

  return (
    <div id='mainContainer'>
      <section>
        <div>
          <Button
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={toggleModal}
          >
            Menu
          </Button>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            onClose={toggleModal}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={modalState}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={toggleModal}>Add Focus</MenuItem>
            <MenuItem onClick={toggleModal}>Calendar</MenuItem>
            <MenuItem onClick={toggleModal}>Trends</MenuItem>
          </Menu>
        </div>
      </section>
    </div>
  );
};

export default App;
