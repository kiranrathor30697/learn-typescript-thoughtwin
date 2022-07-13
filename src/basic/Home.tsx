import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
 
  return (
    <>
      <div className='bg-secondary p-5'>
        <Link to="/" className='p-5 text-decoration-none text-light'>Dashboard</Link>
        <Link to="/home" className='p-5 text-decoration-none text-light'>Home</Link>
        <Link to="/sum" className='p-5 text-decoration-none text-light'>Sum</Link>
        <Link to="/form" className='p-5 text-decoration-none text-light'>Form</Link>
        <Link to="/my_comp" className='p-5 text-decoration-none text-light'>MyComp</Link>  
        <Link to="/multiple_img" className='p-5 text-decoration-none text-light'>Mulple Image</Link>  
        <Link to="/object_type" className='p-5 text-decoration-none text-light'>Object Data</Link>  
        <Link to="/array_type" className='p-5 text-decoration-none text-light'>Array Data</Link>  
        <Link to="/get_fack_data" className='p-5 text-decoration-none text-light'>Get Fack Data</Link> 
      </div>
   </>
  );
}
