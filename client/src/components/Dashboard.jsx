// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Di sini Anda bisa menambahkan logika logout yang diperlukan
    navigate('/login');
  };

  return (
    <div className='dashboard'>
      <header className='header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>Dashboard</h1>
            </div>
            <div className='col-md-6 text-right'>
              <button className='btn btn-danger' onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-12'>
              <p>Welcome to your dashboard!</p>
              <div className='card-deck'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Card 1</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Card 2</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Card 3</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className='card mt-4'>
                <div className='card-body'>
                  <h5 className='card-title'>Large Card</h5>
                  <p className='card-text'>
                    This is a larger card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
