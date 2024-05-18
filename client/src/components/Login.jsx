// src/components/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h3 className='card-title text-center'>Login</h3>
              <form>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Enter email'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Enter password'
                  />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
