import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginSignup.scss';

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
    <div id='loginPage'>
      <div className='ProjectName'>Code Snippets</div>

      <div className='credentialBox'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
          </div>

          <button type='submit'>Login</button>
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
