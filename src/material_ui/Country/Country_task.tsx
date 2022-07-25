import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../api_calling/layout/Header';

export default function Country_task() {

    // const [myData,setMyData] = useState([])
    const [country,setCountry] = useState<any>([])
    const [states,setStates] = useState<any>([])
    const [cities,setCities] = useState<any>([])

    useEffect(() => {
        get_Data()
    }, []);

    const get_Data = async() => {
        try {
            let data = await axios('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
            setCountry(data.data)
            // console.log(data.data);
            
        } catch (error) {
            console.log(error)
        }
    }
    const stateSelect = (e:any) => {
        let country_name:string = e.target.value
        
        for(const ele of country){
            if(ele.name == country_name){
                setStates(ele.states)
            }
        }
    }

    const citySelect = (e:any) => {
        let state_name:string = e.target.value

        for(const ele of states){
            if(ele.name == state_name){
                setCities(ele.cities)
            }
        }
    }

  return (
      <>
        <Header />

        <div className='d-flex justify-content-center'>
            <select name="selectList" className='form-control w-25 d-inline p-2 m-2' onChange={stateSelect} id="selectList">
                <option>Countries</option>
                {
                    country.length > 0 &&
                    country.map((cv:any,idx:number)=>{
                        return <option key={idx}>{cv.name}</option>
                    })
                }
            </select>

            <select name="selectList" className='form-control w-25 d-inline p-2 m-2' id="selectList" onChange={citySelect} >
                <option>States</option>
                {
                    
                    states.map((state_name:any,idx:number)=>{
                        return  <option key={idx}>{state_name.name}</option>
                    })
                }
            </select>

            <select name="selectList" className='form-control w-25 d-inline p-2 m-2' id="selectList" >
                <option value="option 1">Cities</option>

                {
                    cities.map((city_name:any,idx:number)=>{
                        return <option key={idx}>{city_name.name}</option>
                    })
                }

            </select>
        </div>
      </>
  );
}
