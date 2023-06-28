import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginSignup.module.scss';

export default function Login() {
  const [validUser, setValidUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (validUser) {
      navigate('/');
    }
  }, [navigate, validUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {};
    user.username = e.target.elements.username.value;
    user.password = e.target.elements.password.value;
    console.log('Username is', user.username);
    console.log('Password is', user.password);

    fetch('/login', {
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
        return response.json();
      })
      .then((data) => {
        if (data.status === 201) {
          setValidUser(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="./assets/LargeLogo.png"
          alt="Osserva logo with lighthouse"
        />

        <h1 className={styles.heading}>Login</h1>
        <p>Please sign in to continue</p>

        <div className="credentialBox">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="username" className={styles.formItem}>
                Username
              </label>
              <input
                type="text"
                name="username"
                className={`${styles.formItem} ${styles.input}`}
              />
            </div>
            <div>
              <label htmlFor="password" className={styles.formItem}>
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`${styles.formItem} ${styles.input}`}
              />
            </div>

            <button
              type="submit"
              className={`${styles.primaryBtn} ${styles.btn}`}
            >
              Login
            </button>
            <p className={styles.text}>Don't have an account?</p>
            <Link to="/signup">
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
