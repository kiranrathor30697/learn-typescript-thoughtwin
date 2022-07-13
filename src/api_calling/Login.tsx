import React from 'react';
import Header from './layout/Header';

export default function Login() {

    const LoginForm = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }

    const handleLogin = () => {
        //http://192.168.1.11:8000/api/user/login
    }
  return (
    <>
        <Header />
        <div className='mt-5'>
          <form className='w-25 offset-4 border p-5' onSubmit={LoginForm}>
            <h3 className='App mb-4'> Login Form</h3>
            <input type="text" className='form-control mb-4 text-center' onChange={handleLogin} name="userName" placeholder='Enter UserName' />
            <input type="password" className='form-control text-center mb-4' onChange={handleLogin} name="password" placeholder='Enter Password' />
            <div className='App mt-4'>
              <button type="submit" className='btn btn-success'>User Login</button>
            </div>
          </form>
        </div>
    </>
  );
}
