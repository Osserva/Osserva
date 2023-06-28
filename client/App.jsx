import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from './src/redux/actions/actions';
import { Menu, MenuItem, Button } from '@mui/material';
import FocusItem from './src/components/FocusItem';
import styles from './App.module.scss';

//note
//submit

const App = () => {
  const [modalState, setModalState] = useState(false);

  const dispatch = useDispatch();

  //! need endpoint from backend team
  // async function getData() {
  //   try {
  //     const data = await fetch('/focus', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const focusItems = await data.json();

  //     await dispatch(actions.setFocuses(focusItems));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(getData, []);

  function toggleModal() {
    if (modalState) setModalState(false);
    else setModalState(true);
  }

  const focusArray = useSelector((state) => state.focusItems);
  const date = useSelector((state) => state.date);
  const user_id = useSelector((state) => state.user_id);

  const ratingElements = [];

  for (let focus of focusArray) {
    ratingElements.push(
      <FocusItem
        _id={focus._id}
        name={focus.focus_name}
        rating={focus.rating}
        key={focus.id + user_id}
      />
    );
  }

  return (
    <div id='mainContainer' className={styles.background}>
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
      <section>
        <div id='ratingElements'>{ratingElements}</div>
        <div id='note-form'></div>
      </section>
      <section>
        <button>SUBMIT</button>
      </section>
    </div>
  );
};

export default App;
