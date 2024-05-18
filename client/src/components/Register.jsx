// src/components/Register.js
import React from 'react';
import authService from '../services/authService';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage('');

    try {
      const response = await authService.register(username, email, password);
      setMessage('Registration successful!');
      // You can also save the JWT token if needed
      // localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMessage(resMessage);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h3 className='card-title text-center'>Register</h3>
              <form onSubmit={handleRegister}>
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>
                  Register
                </button>
              </form>
              {message && <div>{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
