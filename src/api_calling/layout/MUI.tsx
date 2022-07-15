import React from 'react';
import { Link } from 'react-router-dom';

export default function MUI() {
  return (
    <div className='bg-secondary p-5'>
        <Link to="/home" className='p-5 text-decoration-none text-light'>Home</Link>
        <Link to="/modal" className='p-5 text-decoration-none text-light'>Modal</Link>
      </div>
  );
}
