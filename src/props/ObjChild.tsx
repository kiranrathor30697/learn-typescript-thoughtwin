import React from 'react';

interface Data {
    name:string 
    surname:string 
    age:number 
    email:string
}
interface myD {
    name?:string 
    surname?:string 
    age?:number 
    email?:string
    data:Data 
}
interface info {
    data:{
        name:string 
        surname:string 
        age:number 
        email:string
    }
}


 const ObjChild = ({data}:info) => {
    //  console.log(props.mydata.name);
  return (
    <h5 className='text-center mt-5'>
      {data.name}<br /> 
      {data.surname}<br /> 
      {data.age}<br /> 
      {data.email}<br /> 
    </h5>   
  );
}
export default ObjChild;