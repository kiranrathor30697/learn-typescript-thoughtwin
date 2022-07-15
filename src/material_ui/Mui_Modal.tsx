import { Avatar, Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react';
import MUI from '../api_calling/layout/MUI';

 const Mui_Modal:React.FC = () => {

  const [open, setOpen] = React.useState(false);
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
  
  let data:any = localStorage.getItem('login_Data')
    data = JSON.parse(data)
    console.log(data);
  return (
    <div>
        <MUI />
        <Button variant="outlined" onClick={handleOpen} sx={btn}>Outlined</Button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} >
            <Typography id="modal-modal-title" sx={{textAlign:"center"}} variant="h6" component="h2">
            {data.userName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:"center" }}>
            {data.email}
            </Typography>
            <Typography sx={{display:"flex",justifyContent:"center", mt:2}}>
              <Avatar src={data.profilePic}  alt="Remy Sharp" sx={{ width:'200px !important', height:'200px'}} />
            </Typography>
        </Box>
        </Modal>
    </div>
  );
}
export default Mui_Modal;