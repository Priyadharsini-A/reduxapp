import { Box,FormControl,TextField,Select,MenuItem,InputLabel, Button } from '@mui/material';
import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const[status,setStatus]=useState("");
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phoneno,setPhoneno]=useState('');
    const[organizationname,setOrgname]=useState('');
    const users=useSelector((state)=>state.users);
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const handleChange=(event)=>{
        setStatus(event.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1 ,name,email,status,phoneno,organizationname}))
        
        navigate('/');
        
    }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box sx={{height:400,width:250,border:1,borderRadius:2}}><FormControl>
     <Box sx={{height:20,padding:2}}>Enter the user details</Box>   
    <TextField
    label="UserName"
    variant="outlined"
    size="small"
    value={name}
    style={{margin:10}}
    onChange={(e)=>setName(e.target.value)}>
    </TextField>
    
    <TextField
    label="Email"
    variant="outlined"
    size="small"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    style={{margin:10}}>
    </TextField>
    </FormControl>
    <FormControl>
    <InputLabel id="demo-simple-select-label">status</InputLabel>
    
    <Select
    labelId="demo-simple-select-label"
    value={status}
    onChange={handleChange}
    sx={{
        width:220,
        height:40,
        margin:1
       
      }}
    >
    <MenuItem value={"Active"}>Active</MenuItem>
    <MenuItem value={"InActive"}>InActive</MenuItem>
    
    </Select>
    
    
    <TextField
    label="PhoneNo"
    variant="outlined"
    size="small"
    value={phoneno}
    onChange={(e)=>setPhoneno(e.target.value)}
    style={{margin:10}}>
    </TextField>
    
    <TextField
    label="OrganizationName"
    variant="outlined"
    size="small"
    value={organizationname}
    onChange={(e)=>setOrgname(e.target.value)}
    style={{margin:10}}>
    </TextField>
    <Button sx={{margin:1}}variant="contained"onClick={handleSubmit}>Add</Button>
    </FormControl>
     </Box>
        
    </Box>
  )
}

export default Create;