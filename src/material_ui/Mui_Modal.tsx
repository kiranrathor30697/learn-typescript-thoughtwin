import { Avatar, Backdrop, Box, Button, Fade, Modal, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
interface modal{
  open:Boolean,
  onClose:any,
  get_data:any
}
 const Mui_Modal = ({open,onClose,viewuserdata,get_data}:any) => {

  const [userData,setUserData] = useState()

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:300,
  };

  const btn = {
    margin:'100px 700px'
  }
  // console.log(get_data);
      console.log(viewuserdata);
  return (
    <div>
       {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* {
              get_data?.map((cv:any,idx:number)=>{
                // console.log('=================+++++++',cv.email)
                
                return(
                  // if(getuser.userName){

                  // }
                  <Typography key={idx} id="transition-modal-title" variant="h6" component="h2">
                  {cv.email}
                 </Typography>
                )
              })
            } */}
           <Typography id="transition-modal-title" variant="h6" component="h2">
                  <h2>User Name:- {viewuserdata}</h2>
                 </Typography>
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default Mui_Modal;