import { getMaxListeners } from 'process';
import React, { useState } from 'react';
import ObjChild from './ObjChild';

interface myInfo {
    name:string
    surname:string
    age:number
    email:string
}

const ObjectType= () => {
    // let data:myInfo;
    // let setData:any;

    const [data,setData] = useState<myInfo>({
        name:'Kiran',
        surname:'Rathor',
        age:25,
        email:'k@gmail.com'
    })
  return (
    <div>
      <h1 className='text-center mt-5'>My Data</h1>
      <ObjChild data={data}/>
    </div>
  );
}
export default ObjectType;  
