import React, { useState } from 'react'
import Header from './layout/Header'

const Register = () => {
    interface regtype {
        userName:string
        email:string
        profilePic:string
        password:string
        confirmPassword:string
    }
    const [reg_data,setReg_data] = useState<regtype>({
        userName:'',
        email:'',
        profilePic:'',
        password:'',
        confirmPassword:''
    })
    const handleRegister = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setReg_data({
            ...reg_data,
            [name]:value
        })
    }

    const handleRegisterImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        let img:any = e.target.files
        setReg_data({
            ...reg_data,
            profilePic:img
        })
    }

    const RegisterForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setReg_data({
            ...reg_data,
            userName:'',
            email:'',
            profilePic:'',
            password:'',
            confirmPassword:''
        })
    }
    console.log(reg_data);

  return (
    <>
        <Header />
        <div className='mt-5'>
          <form className='w-25 offset-4 border p-5' onSubmit={RegisterForm}>
            <h3 className='App mb-4'> Register Form</h3>
            <input type="text" className='form-control mb-4 text-center' onChange={handleRegister} name="userName" placeholder='Enter UserName' />
            <input type="email" className='form-control text-center mb-4' onChange={handleRegister} name="email" placeholder='Enter Email' />
            <input type="file" accept="image/*" id='profilePic' className='form-control mb-4' onChange={handleRegisterImg} name="profilePic" placeholder='Select Profile' />
            <input type="password" className='form-control text-center mb-4' onChange={handleRegister} name="password" placeholder='Enter Password' />
            <input type="password" className='form-control text-center mb-4' onChange={handleRegister} name="confirmPassword" placeholder='Enter Confirm Password' />
            <div className='App mt-4'>
              <button type="submit" className='btn btn-success'>User Login</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default Register

// http://192.168.1.11:8000/api/user/register