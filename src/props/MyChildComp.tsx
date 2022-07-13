import React, { useState } from 'react';

interface myData {
    name:string;
    age:number;
    image:string;
}

export default function MyChildComp(props:myData) {

    // const [img,setImg] = useState({});

    // const handle_Img = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.files);
    //     let files = []
    //     // let newFiles = []
    //     files.push(e.target.files)
    //     console.log('------->',files);
    //     // newFiles.push(files)
    //     // console.log('======>',newFiles);
        
    //     let newFiles = ''
    //     for(var pic of files){
    //         console.log(files[0]);
    //         newFiles += pic + "<br />"
    //     console.log('akdskdjjshdsgfjhghfjdg',newFiles[0]);

    //     }
    // }
    // const select_Img = (e:React.MouseEvent) => {
    //     e.preventDefault();
    //     // console.log('ok');
    // }
  return (
    <div>
      <h1>{props.name}</h1><br />
      <h1>{props.age}</h1><br />
      <img src={props.image}/><br /><br />
      {/* <input type="file" multiple onChange={handle_Img} accept="image/*" /><br /><br />
      <button className='btn btn-success' onClick={select_Img}>Select Image</button> */}
    </div>
  );
}
