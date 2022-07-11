import axios from 'axios';
import React, { useState } from 'react';
import Home from './Home';

export default function GetFackData() {
    const [data,setData] = useState([])
    const getFormData = async(e:React.MouseEvent) => {
        e.preventDefault();
        // console.log('get data');
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <Home />
        {
            data.length > 0 && 
            <div>
                <table>
                <thead>
                    <tr>
                        <th className='p-4'>Id</th>
                        <th className='p-4'>Name</th>
                        <th className='p-4'>UserName</th>
                        <th className='p-4'>Email</th>
                        <th className='p-4'>Phone</th>
                        <th className='p-4'>Website</th>
                        <th className='p-4'>Company</th>
                        <th className='p-4'>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((cv:any,idx,arr)=>{
                            console.log(cv);
                            return (
                                <tr key={idx}>
                                    <td className='p-4'>{cv.id}</td>
                                    <td className='p-4'>{cv.name}</td>
                                    <td className='p-4'>{cv.username}</td>
                                    <td className='p-4'>{cv.email}</td>
                                    <td className='p-4'>{cv.phone}</td>
                                    <td className='p-4'>{cv.website}</td>
                                    <td className='p-4'>{cv.company.catchPhrase} {<br />} {cv.company.name} {<br />} {cv.company.bs}</td>
                                    <td className='p-4'>{cv.address.city} {<br />} {cv.address.zipcode}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div>
        }
        <div className='text-center mt-5'>
            <button className='btn btn-success' onClick={getFormData}>Get User Data</button>
        </div>
    </>
  );    
}
