import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../basic/Home';

export default function Header() {
  return (
      <>
      <div className='bg-secondary p-5'>
        <Link to="/register" className='p-5 text-decoration-none text-light'>Register</Link>
        <Link to="/home" className='p-5 text-decoration-none text-light'>Home</Link>
      </div>
      </>
  );
}
