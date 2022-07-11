import { Button, Input } from '@mui/material';
import React from 'react';
import Home from './Home';

export default function Form() {

  const formSubmit = (e:React.MouseEvent) => {
    e.preventDefault()
    console.log('ik')
  }
  return (
    <>
      <Home />
      <div className=' w-25 offset-4 mt-5 '>
        <form className='border p-4'>
          <h3 className='mb-2 text-center'>Form</h3>
          <input className="mb-3 form-control" type="text" placeholder='Enter Name' />
          <input className="mb-3 form-control" type="email" placeholder='Enter Email' />
          <input className=" form-control" type="number" placeholder='Enter Number' /><br />
          <div className='text-center'>
            <button className='btn btn-success' onClick={formSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
