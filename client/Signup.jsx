import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//import styles from './LoginSignup.scss';

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

    fetch('/signup', {
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
    <div id='signupPage'>
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
          <button type='submit'>Sign Up</button>
        </form>
        <p>Already a user?</p>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
