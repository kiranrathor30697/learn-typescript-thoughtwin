import React from 'react';
import Home from '../basic/Home';

export default function Sum() {

  const sum = (a:number,b:number) => {
    return a+b;
  }

  const res = sum(5,10);
  return (
    <div >
      <Home />
      <h5 className='text-center mt-5'>Sum of two Number :- {res}</h5>
    </div>
  );
}
