import { Avatar, Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import MUI from '../api_calling/layout/MUI';
// interface modal{
//   viewData:any
// }
 const Mui_Modal = (props:any) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    minWidth: 800,
    height: 350,
  }; 

  const btn = {
    margin:'100px 700px',
  }
  const showHideClassName = props?.userdata ? "modal display-block" : "modal display-none";
  // debugger
  return (
    <div>
        {/* <Button variant="outlined" onClick={handleOpen} sx={btn}>Outlined</Button> */}

        <Modal
        open={open}
        // userdata={userdata}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={showHideClassName}
        >
          
        <Box sx={style} >
          
          {/* {props.userdata} */}
            <Typography id="modal-modal-title" sx={{textAlign:"center"}} variant="h6" component="h2">
            kiran
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:"center" }}>
            Rathor
            </Typography>
            <Typography sx={{display:"flex",justifyContent:"center", mt:2}}>
              <Avatar  alt="Remy Sharp" sx={{ width:'200px !important', height:'200px'}} />
            </Typography>
        </Box>
        </Modal>
    </div>
  );
}
export default Mui_Modal;