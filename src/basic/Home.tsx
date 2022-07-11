import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
 
  return (
    <>
      <div className='mt-5'>
        <Link to="/" className='p-5 text-decoration-none'>Home</Link>
        <Link to="/sum" className='p-5 text-decoration-none'>Sum</Link>
        <Link to="/form" className='p-5 text-decoration-none'>Form</Link>
        <Link to="/get_fack_data" className='p-5 text-decoration-none'>Get Fack Data</Link>
        <Link to="/my_comp" className='p-5 text-decoration-none'>MyComp</Link>  
      </div>
   </>
  );
}
