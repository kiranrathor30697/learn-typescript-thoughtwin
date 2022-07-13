import React from 'react';
import MyChildComp from './MyChildComp';
import a from '../img/a.jpeg'
import Home from '../basic/Home';


export default function MyComp() {
  return (
    <div>
      <Home />
      <div className='mt-5 text-center'>
      <MyChildComp name='Kiran' age={25} image={a}  />
      </div>
    </div>
  );
}
