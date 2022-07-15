import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    let remove_token:any = localStorage.removeItem('token')
    
    if(!token){
        setTimeout(()=>{ 
            navigate('/login')
          },1000)
    }
  return (
    <>
      {
          token ? remove_token :null
      }
    </>
  );
}
