import { Button, Table, TableBody, TableCell, TableContainer, tableContainerClasses, TableHead, TableRow } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
// import { Table, TableBody, TableRow } from 'material-ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mui_Modal from '../material_ui/Mui_Modal';
import Header from './layout/Header';
interface getData{
    get_data?:{
        email:string
        userName:string
        profilrPic:string
    }
   mydata?:{
       data?:any
   }
   token?:string
   Authorization?:string
   headers?:{
       Authorization?:string
   }
   map?:any
   setGet_data?:any
}
export default function Get_Data() {
    const btn = {
        marginRight:'20px',
      }
    const navigate = useNavigate();
    const [get_data,setGet_data] = useState<getData>() 
    const [userdata,setUserData] = useState<any>(false);

    const getData = async (e:React.MouseEvent<HTMLButtonElement>) => {
        let token:any = localStorage.getItem('token')
        try {
            // debugger
            const mydata = await axios.get(' http://192.168.1.3:8000/api/user/registeredUser',{
                headers:{
                    Authorization:token
                }
            })
            setGet_data(mydata.data);

            console.log('==========',get_data);
        } catch (error) {
            console.log(error);
        }
    }

    const editData = () => {
        navigate('/editForm')
    }
    const viewUser = () =>{
        setUserData(true)
    }

    // console.log(get_data);
    let local_data:any = localStorage.getItem('login_Data')
    local_data = JSON.parse(local_data)
    // console.log(local_data.userName); 

  return (
    <>
      <Header />

      <div className=''>

        <TableContainer>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell  align="center"><h5><b>S No</b></h5></TableCell>
                <TableCell align="center"><h5><b>User Name</b></h5></TableCell>
                <TableCell align="center"><h5><b>Email</b></h5></TableCell>
                <TableCell align="center"><h5><b>Profile Pic</b></h5></TableCell>
                <TableCell align="center"><h5><b>Profile Update</b></h5></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    get_data?.map((cv:any,idx:number) => (
                    <TableRow key={idx}>
                        <TableCell align="center"><h5>{idx+1}</h5></TableCell>
                        <TableCell align="center"><h5>{cv.userName}</h5></TableCell>
                        <TableCell align="center"><h5>{cv.email}</h5></TableCell>
                        <TableCell align="center"><h5>{
                        <img 
                        src={cv.profilePic}
                        alt="Image not Found"
                        height={300}
                        width={300}
                        />
                        }</h5></TableCell>
                        <TableCell align="center">
                            <h5>
                                <Button variant="outlined" onClick={viewUser} sx={btn}>Outlined</Button>
                                {
                                (local_data.userName == cv.userName) ?
                                <button className='btn btn-success btn-sm' onClick={editData}>Edit</button>
                                :null
                                }
                            </h5>
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
            </Table>
        </TableContainer>
           
      </div>
      <div className='text-center'>
        <button className='btn btn-success' onClick={getData}>Get Data</button>
      </div>
      <Mui_Modal userdata={userdata} />
    </>
  );
}