import React, { useState } from 'react';
import Home from '../basic/Home';
import ArrayChild from './ArrayChild';

export default function ArrayType() {
    const [arr,setArr] = useState<string[]>(['Rudransh','Kamlesh','Anjali','kiran'])

  return (
    <div>
        <Home />
      <h1 className='text-center mt-5'>ArrayType</h1>
      <ArrayChild info={arr}  />
    </div>
  );
}
