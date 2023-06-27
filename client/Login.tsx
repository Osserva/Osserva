import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//import styles from './LoginSignup.scss';

const Login: React.FC = () => {
  const [validUser, setValidUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (validUser) {
      navigate('/');
    }
  }, [navigate, validUser]);

  interface User {
    username: string;
    password: string;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    const user = {
      username: target.username.value,
      password: target.password.value,
    };

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
};

export default Login;
