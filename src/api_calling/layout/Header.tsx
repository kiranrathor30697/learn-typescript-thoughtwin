import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../basic/Home';

export default function Header() {
  return (
      <>
      <div className='bg-secondary p-5'>
        <Link to="/home" className='p-5 text-decoration-none text-light'>Home</Link>
        <Link to="/register" className='p-5 text-decoration-none text-light'>Register</Link>
        <Link to="/login" className='p-5 text-decoration-none text-light'>Login</Link>
        <Link to="/getdata" className='p-5 text-decoration-none text-light'>Get Data</Link>
        <Link to="/logout" className='p-5 text-decoration-none text-light'>Logout</Link>
        <Link to="/mui" className='p-5 text-decoration-none text-light'>Material UI</Link>
        <Link to="/country" className='p-5 text-decoration-none text-light'>Country Task</Link>
      </div>
      </>
  );
}
