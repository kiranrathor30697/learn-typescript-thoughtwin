import { Avatar, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import Header from './layout/Header'


 const EditData:React.FC = () => {

    let data:any = localStorage.getItem('login_Data')
    data = JSON.parse(data)

    const [editdata,setEditData] = useState({
        "email":'',
        "profilePic":''
    })

    useEffect(()=>{
        let local:any = localStorage.getItem('login_Data')
        local = JSON.parse(local)
        setEditData({
            ...editdata,
            "email":local.email,
            "profilePic":local.profilePic
        })
        
    },[setEditData])
    const changeData = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditData({
            ...editdata,
            "email":e.target.value
        })
    }

    const changeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
        const pic:any = e.target.files 
        setEditData({
            ...editdata,
            "profilePic":pic[0]
        })  
    }

    const updateData = async() => {
        // console.log(editdata);
        let token:any = localStorage.getItem('token')
        let data = new FormData();
       data.append('email',editdata.email)
       data.append('profilePic',editdata.profilePic)
        try {
            const updateData:any = await axios.patch("http://192.168.1.3:8000/api/user/update",data,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    Authorization:token
                }
            })
            console.log(updateData.data);
            setEditData({
                ...editdata,
                email:updateData.data.email,
                profilePic:updateData.data.profilrPic
            })
            localStorage.setItem('login_Data', JSON.stringify(updateData.data))
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <>
         <Header />
         <div style={{display:"flex",justifyContent:"center"}}>
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField type="text" id="outlined-basic" name="email" label="Email" value={editdata.email} variant="filled" onChange={changeData}  /><br />
                <TextField type="file" id="outlined-basic" label="" variant="filled" onChange={changeImage} /> 
                <Avatar alt="Remy Sharp" sx={{ width:'230px !important', height:'200px'}} src={data.profilePic} />
                <Button variant="contained" color="primary" sx={{marginLeft:"30px !important"}} onClick={updateData}>
                    Edit Data
                </Button> 
            </Box>
        </div>
      </>
  );
}
export default EditData