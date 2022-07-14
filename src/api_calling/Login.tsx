import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './layout/Header';

interface loginType{
  userName:string,
     password:string
}
export default function Login() {

  const navigate = useNavigate();

   const [login_data,setLoginData] = useState<loginType>({
     userName:'',
     password:''
   })

    const handleLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name,value} = e.target;
      setLoginData({
        ...login_data,
        [name]:value
      })
    }
    const LoginForm = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();  
      try {
        const login = await axios.post('http://192.168.1.3:8000/api/user/login',login_data)
        
        console.log(login.data.data);
        
        localStorage.setItem('token', login.data.data.token)
        localStorage.setItem('login_Data', JSON.stringify(login.data.data))
        
        navigate('/getdata')

      } catch (error) {
        console.log(error);
      }
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
