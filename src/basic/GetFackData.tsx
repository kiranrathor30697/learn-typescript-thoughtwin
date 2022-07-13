import axios from 'axios';
import React, { useState } from 'react';
import Home from './Home';
interface getType{
    id:number
    name:string
    username:string
    email:string
    phone:number
    website:string
    company:{
        catchPhrase:string
        name:string
        bs:string
    }
    address:{
        city:string
        zipcode:string
    }
}

export default function GetFackData() {
    const [data,setData] = useState([])
    const getFormData = async(e:React.MouseEvent) => {
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
            data.length > 0 ?
            <div className='mt-5 container'>
                <h4 className='text-center mb-4'><strong>Get Data Table</strong></h4>
                <table>
                <thead>
                    <tr>
                        <th className='p-4 border'>Id</th>
                        <th className='p-4 border'>Name</th>
                        <th className='p-4 border'>UserName</th>
                        <th className='p-4 border'>Email</th>
                        <th className='p-4 border'>Phone</th>
                        <th className='p-4 border'>Website</th>
                        <th className='p-4 border'>Company</th>
                        <th className='p-4 border'>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((cv:getType,idx,arr)=>{
                            console.log(cv);
                            return (
                                <tr key={idx}>
                                    <td className='p-4 border'>{cv.id}</td>
                                    <td className='p-4 border'>{cv.name}</td>
                                    <td className='p-4 border'>{cv.username}</td>
                                    <td className='p-4 border'>{cv.email}</td>
                                    <td className='p-4 border'>{cv.phone}</td>
                                    <td className='p-4 border'>{cv.website}</td>
                                    <td className='p-4 border'>{cv.company.catchPhrase} {<br />} {cv.company.name} {<br />} {cv.company.bs}</td>
                                    <td className='p-4 border'>{cv.address.city} {<br />} {cv.address.zipcode}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div> 
            :<div className='text-center mt-5'>
                <button className='btn btn-success' onClick={getFormData}>Get User Data</button>
            </div>
        }
        
    </>
  );    
}
