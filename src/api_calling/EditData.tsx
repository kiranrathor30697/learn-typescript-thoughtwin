import { Avatar, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { Component, useState } from 'react'
import Header from './layout/Header'

// export default class EditData extends Component {

//     state = {

//     }
    
//     changeData = (e:React.ChangeEvent<HTMLInputElement>) => {
//         this.setState(e.target.value)
//     }
//   render() {
//       let data:any = localStorage.getItem('login_Data')
//       data = JSON.parse(data)
//     return (
//       <>
//         <Header />
//         <div style={{display:"flex",justifyContent:"center"}}>
//             <Box
//                 component="form"
//                 sx={{
//                     '& > :not(style)': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//                 >
//                 <TextField type="text" id="outlined-basic" name="email" label="Email" value={data.email} variant="filled" onChange={(e)=>{this.changeData}}  /><br />
//                 <TextField type="file" id="outlined-basic" label="" variant="filled" /> 
//                     <Avatar alt="Remy Sharp" sx={{ width:'230px !important', height:'200px'}} src={data.profilePic} />
//                 <Button variant="contained" color="primary" sx={{marginLeft:"30px !important"}}>
//                     Edit Data
//                 </Button> 
//             </Box>
//         </div>
//       </>
//     )
//   }
// }


export default function EditData() {

    let data:any = localStorage.getItem('login_Data')
    data = JSON.parse(data)

    const [editdata,setEditData] = useState({
        "email":data.email,
        "profilePic":data.profilePic
    })

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
        try {
            const updateData = await axios.patch("http://192.168.1.3:8000/api/user/update",editdata,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    Authorization:data.token
                }
            })
            console.log(updateData.data);
            localStorage.getItem(JSON.stringify('login_Data',updateData.data))
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
