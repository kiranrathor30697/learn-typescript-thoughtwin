import React, { useState } from "react";

const Multiple_Img = () => {
  const [file, setFile] = useState<any>([]);

  function uploadSingleFile(e:React.ChangeEvent<HTMLInputElement>) {
    let d:any = e.target.files;
    let ImagesArray = Object.entries(d).map((e:any,idx:number) =>
      URL.createObjectURL(e[1])
        );
    // console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e:React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e:React.MouseEvent<HTMLElement>) {
    const s = file.filter((item:any, index:number) => item);
    setFile(s);
    console.log(s);
  }

  return (
    <form>
      <div className="form-group preview">
        {file.length > 0 &&
          file.map((item:any, index:number) => {
            return (
              <div key={item} className="d-flex justify-content-center">
                <img src={item} alt="" className="p-3" /><br />
                {/* <button type="button" onClick={() => deleteFile(index)}>
                  delete
                </button> */}
              </div>
            );
          })}
      </div>

      <div className="form-group">
        <input
          type="file"
          disabled={file.length === 5}
          className="form-control"
          onChange={uploadSingleFile}
          multiple
        />
      </div>
      {/* {
        file.map((cv:any,idx:number)=>{
          console.log('"""""""""""""',cv);
          return (
            <img src={cv} key={idx} />
          )
        })
      } */}
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button>
    </form>
  );
};

export default Multiple_Img;























// import React, { useEffect, useState } from 'react';

// interface myData {
//     name:string;
//     age:number;
//     image:any;
//     files:string;
// }
// let newFile:any = [];
// export default function Multiple_Img() {
    
//     const handle_Img = (e:React.ChangeEvent<HTMLInputElement>) => {
//       const image:any =  e.currentTarget.files;
//       // console.log(e.target.files);
//       for (var elm of image) {
//         if(image.length > 0){
//           newFile.push(elm)
//         }
//       }
//     }

//     console.log('newData',newFile);

//     const show_Img = () => {
//       // console.log('ok');
//       console.log(newFile);

//     }
//   return (
//     <div >
//       <br />
//       <br />
//       <div className='text-center'>
//         <input type="file" multiple onChange={handle_Img}  id="file" /><br /><br />
//       </div>
//       <div className='text-center pe-5'>
//         <button className='btn btn-success me-5' onClick={show_Img}>Show Image</button>
//       </div>
//       <div>
//       {
//         newFile.length > 0 &&
//         newFile?.map((cv:any)=>{
//           console.log(cv);
//         })
//       }
//       {
//         newFile.length > 0 ? console.log('false'):console.log('true')
//       }
//       </div>
//       {/* <img src='' alt='Image Not Found' className='me-5' /><br /><br /> */}
//     </div>
//   );
// }
