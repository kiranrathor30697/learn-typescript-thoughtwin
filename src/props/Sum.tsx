import React, { useState } from 'react';
import Home from '../basic/Home';

export default function Sum() {

  const sum = (a:number,b:number) => {
    return a+b;
  }
  const res = sum(5,10);

  const [n1,setN1] = useState('');
  const [n2,setN2] = useState('');
  const [result,setResult] = useState('');

  const num1 = (e:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value);
    let no1 = e.target.value
    setN1(no1)
  }
  const num2 = (e:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value);
    let no2 = e.target.value
    setN2(no2)  
  }
  const addNum = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = JSON.parse(n1)+JSON.parse(n2)
    console.log(res);
    setResult(res)
    
  }
  
  return (
    <div >
      <Home />
      {/* <h5 className='text-center mt-5'>Sum of two Number :- {res}</h5> */}
      <div className='w-25 mx-auto mt-5 '>
        <form className='border p-5 rounded' onSubmit={addNum}>
          <h4 className='text-center mb-4'><strong>Add two Number</strong></h4>
          <h2 className='text-center'>{result}</h2>
          <input type="number" className='form-control' placeholder='First Number' onChange={num1} /><br />
          <input type="number" className='form-control' placeholder='Second Number' onChange={num2} /><br />
          <button className='btn btn-success'>Add Number</button>
        </form>
        
      </div>
    </div>
  );
}
