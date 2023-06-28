import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginSignup.module.scss';


export default function Login() {
  const [validUser, setValidUser] = useState(false);
  const [failLogin, setFailLogin] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {};
    user.username = e.target.elements.username.value;
    user.password = e.target.elements.password.value;
    console.log('Username is', user.username);
    console.log('Password is', typeof user.password);

    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to login');
        }
        return response;
      })
      .then((data) => {
        console.log(data);
        if (data.status === 202) {
          setValidUser(true);
          navigate('/app');
        }
      })
      .catch((error) => {
        console.log(error);
        setFailLogin(true);
      });
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={'./assets/LargeLogo.png'}
          alt='Osserva logo with lighthouse'
        />

        <h1 className={styles.heading}>Login</h1>
        <p>Please sign in to continue</p>
        {failLogin && <div> login failed</div>}
        <div className='credentialBox'>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor='username' className={styles.formItem}>
                Username
              </label>
              <input
                type='text'
                name='username'
                className={`${styles.formItem} ${styles.input}`}
              />
            </div>
            <div>
              <label htmlFor='password' className={styles.formItem}>
                Password
              </label>
              <input
                type='password'
                name='password'
                className={`${styles.formItem} ${styles.input}`}
              />
            </div>
            <button
              type='submit'
              className={`${styles.primaryBtn} ${styles.btn}`}
            >
              Login
            </button>
            <p className={styles.text}>Don't have an account?</p>
            <Link to={'/signup'}>
              <button className={`${styles.secondaryBtn} ${styles.btn}`}>
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
