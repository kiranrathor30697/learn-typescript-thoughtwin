import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()
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
            profilePic:img[0]
        })
    }

    const RegisterForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       let data = new FormData();
       data.append('userName',reg_data.userName)
       data.append('email',reg_data.email)
       data.append('profilePic',reg_data.profilePic)
       data.append('password',reg_data.password)
       data.append('confirmPassword',reg_data.confirmPassword)

        try {
            const reg = axios.post('http://192.168.1.11:8000/api/user/register',data)
            console.log(reg);
            navigate('/login')
            
        } catch (error) {
            console.log(error);
        }
    }

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
              <button type="submit" className='btn btn-success'>User Register</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default Register

// http://192.168.1.11:8000/api/user/register