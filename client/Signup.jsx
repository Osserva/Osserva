import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginSignup.module.scss';

export default function Signup() {
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userCreated) {
      navigate('/login');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {};
    user.username = e.target.elements.username.value;
    user.password = e.target.elements.password.value;

    console.log(user);

    fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((data) => {
        if (data.status === 201) {
          setUserCreated(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.background}>
      <div id="signupPage" className={styles.container}>
        <img
          className={styles.image}
          src="./assets/LargeLogo.png"
          alt="Osserva logo with lighthouse"
        />

        <h1 className={styles.heading}>Create Account</h1>

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
              Sign Up
            </button>
            <p className={styles.text}>Already a user?</p>
            <Link to="/">
              <button className={`${styles.secondaryBtn} ${styles.btn}`}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
