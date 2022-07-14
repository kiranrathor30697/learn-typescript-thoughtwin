import { TableCell, TableContainer, TableHead } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { Table, TableBody, TableRow } from 'material-ui';
import React, { useState } from 'react';
import Header from './layout/Header';

export default function Get_Data() {
    interface getData{
         get_data?:Array<Object>
        mydata?:{
            data?:any
        }
        token?:string
        Authorization?:string
        headers?:{
            Authorization?:string
        }
        map?:any
    }

    const [get_data,setGet_data] = useState<getData>()

    const getData = async (e:React.MouseEvent<HTMLButtonElement>) => {

        let token:any = localStorage.getItem('token')

        try {
            // debugger
            const mydata = await axios.get(' http://192.168.1.11:8000/api/user/registeredUser',{
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
      
    console.log(get_data);
  return (
    <>
      <Header />
      {
         // length > 0 ? true : false
      }
      <div className='text-center'>
        <button className='btn btn-success' onClick={getData}>Get Data</button>
      </div>

      <div className=''>
        <table className='container-fluid'>
            <thead>
                <tr>
                    <th className='p-5 border text-center'>Id</th>
                    <th className='p-5 border text-center'>uaerName</th>
                    <th className='p-5 border text-center'>Email</th>
                    <th className='p-5 border text-center'>ProfilePic</th>
                </tr>
            </thead>
            <tbody>
            {
                get_data?.map((cv:any,idx:number)=>{
                    console.log(cv);
                    return(
                        <tr key={idx}>
                            <td className='p-5 border text-center'>{idx+1}</td>
                            <td className='p-5 border text-center'>{cv.userName}</td>
                            <td className='p-5 border text-center'>{cv.email}</td>
                            <td className='p-5 border text-center'>{cv.propfilePic}</td>
                            <td className='p-5 border text-center'>
                                <button className='btn btn-success btn-lg'>Edit</button>
                                <button className='btn btn-danger btn-lg'>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
      </div>
     

        

      
    
    </>
  );
}
