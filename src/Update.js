import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';




function Update() {
    const {id}=useParams(); 
    console.log('id',+id)
    const users=useSelector((state)=>state.users.userList);
    console.log(users);
    const existingUser=users.filter((user)=>{
       return user.id==id;
    })
    
     const{name,email,status,phoneno,organizationname}=existingUser[0];
    const[ustatus,setStatus]=useState(status);
    const[uname,setName]=useState(name);
    const[uemail,setEmail]=useState(email);
    const[uphoneno,setPhoneno]=useState(phoneno);
    const[uorganizationname,setOrgname]=useState(organizationname);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail,
            phoneno:uphoneno,
            status:ustatus,
            organizationname:uorganizationname
        }));
        navigate('/');

    }
    return(
    <Box 
    sx={{display:'flex',justifyContent:'center'}}>
    <Box sx={{height:400,width:250,border:1,borderRadius:2}}><FormControl>
 <Box sx={{height:20,padding:2}}>Update User</Box>   
<TextField
label="UserName"
variant="outlined"
size="small"
value={uname}
style={{margin:10}}
onChange={(e)=>setName(e.target.value)}
>
</TextField>

<TextField
label="Email"
variant="outlined"
size="small"
value={uemail}
style={{margin:10}}
onChange={(e)=>setEmail(e.target.value)}>
</TextField>
</FormControl>
<FormControl>
<InputLabel id="demo-simple-select-label">status</InputLabel>

<Select
labelId="demo-simple-select-label"
value={ustatus}
sx={{
    width:220,
    height:40,
    margin:1
   
  }}
  onChange={(e)=>setStatus(e.target.value)}
  
>
<MenuItem value={"Active"}>Active</MenuItem>
<MenuItem value={"InActive"}>InActive</MenuItem>

</Select>


<TextField
label="PhoneNo"
variant="outlined"
size="small"
value={uphoneno}
style={{margin:10}}
onChange={(e)=>setPhoneno(e.target.value)}>
</TextField>

<TextField
label="OrganizationName"
variant="outlined"
size="small"
value={uorganizationname}
style={{margin:10}}
onChange={(e)=>setOrgname(e.target.value)}>
</TextField>
<Button sx={{margin:1}}variant="contained"onClick={handleSubmit}>Add</Button>
</FormControl>
 </Box>
    
</Box>

    )
  
}

export default Update;