import React from 'react';
import MyChildComp from './MyChildComp';
import a from '../img/a.jpeg'


export default function MyComp() {
  return (
    <div>
      <h2>Kiran</h2>
      <MyChildComp name='Kiran' age={25} image={a} />
    </div>
  );
}
