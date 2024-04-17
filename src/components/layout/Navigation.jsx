import React from 'react';
import './nav.css'
import { Link }  from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="container">
      <div className='nav-container'>
          <div className="logo">Logo</div>
          <ul className='links'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/patients'>Patients</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/districts'>Districts</Link>
              </li>
              <li>
                <Link to='/villages'>Villages</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/payments'>Payments</Link>
              </li>
          
          </ul>
      </div>
    </div>
  )
}

export default Navigation