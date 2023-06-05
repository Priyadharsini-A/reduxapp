import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function View(props) {
   console.log("In view")
   console.log(props.userid)
    const {id}=useParams();
    const users=useSelector((state)=>state.users);
    const existingUser=users.filter((user)=>{
        return user.id==props.userid;
     });
     console.log("existinguser",existingUser);
   const{name,email,status,phoneno,organizationname}=existingUser[0];
  return (
    <div>
 <Box>
   <h1>{name} Details</h1>
      <Typography>Email:{email}</Typography>
   <Typography>Status:{status}</Typography>
   <Typography>PhoneNo:{phoneno}</Typography>
   <Typography>OrganizationName:{organizationname}</Typography>


 </Box>

    </div>
    
  )
}

export default View;