import React, { useState } from 'react';
import {Box, Modal, Typography} from '@mui/material';
import { userList } from './Data';
import { useSelector } from 'react-redux';
import { DataGrid ,GridRowsProp,GridColDef} from '@mui/x-data-grid';
import {Button} from '@mui/material';
//import { Link } from '@mui/material';
 import { Link } from 'react-router-dom';
import View from './View';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};







function UserDetails() {
const users=useSelector((state)=>state.users)
const [userid,setuserId]=useState(0);
const [open, setOpen] = React.useState(false);
  const handleOpen = (cellValues) => {
    console.log('true');
    console.log(cellValues.id);
    setuserId(cellValues.id)
    setOpen(true);

  }
  const handleClose = () => setOpen(false);



const columns: GridColDef[] =[
  {field:"id",hide:"true"},
{field:'name',headerName:'UserName',width:150,
renderCell: (cellValues) => (
  <Button  onClick={()=>handleOpen(cellValues)}>{cellValues.value}</Button>
)},
{field:'email',headerName:'EmailAddress',width:150},
{field:'status',headerName:'Status',width:150},
{field:'phoneno',headerName:'PhoneNo',width:150},
{field:'organizationname',headerName:'OrganizationName',width:150},
{field:'Action',renderCell:(cellValues)=>{
  return(
    <Link to={`/update/${cellValues.id}`}
    component="button"
    variant="contained"
    color="primary"
    
  >
    Edit
  </Link>
  
  )
}}]

  return (
    <Box sx={{marginTop:2}}>
        <Box sx={{height:20,padding:1,backgroundColor:"pink"}}>
            UserDetails
        </Box>
       <DataGrid
       columns={columns}
       rows={users}
       
       >
        </DataGrid> 
        {/* {showmodal&&<View/>} */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          
          <View userid={userid}/>
          
        </Box>
      </Modal>
    </Box>
  )
}

export default UserDetails;