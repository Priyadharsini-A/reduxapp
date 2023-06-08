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
    const[errors,setErrors]=useState('');
    const users=useSelector((state)=>state.users.userList);
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const handleChange=(event)=>{
        setStatus(event.target.value);
    }
    const validateForm = () => {
      let newErrors = {};
  
      if (name.trim() === '') {
        newErrors.name = 'Name is required';
      }
  
      if (phoneno.trim() === '') {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(phoneno.trim())) {
        newErrors.phone = 'Invalid phone number format';
      }
      if (status.trim() === '') {
        newErrors.status = 'Status is required';
      }
  
      if (email.trim() === '') {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
        newErrors.email = 'Invalid email format';
      }
      
  
      if (organizationname.trim() === '') {
        newErrors.organization = 'Organization name is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (validateForm()) {
        dispatch(addUser({id:users[users.length-1].id+1 ,name,email,status,phoneno,organizationname}))
        
        navigate('/');
        }
        
    }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box sx={{height:400,width:250,border:1,borderRadius:2}}><FormControl>
     <Box sx={{height:20,padding:2}}>Enter the user details</Box>   
    <TextField
    id="name"
    label="UserName"
    variant="outlined"
    size="small"
    value={name}
    
    
    style={{margin:10}}
    onChange={(e)=>setName(e.target.value)}
    error={errors.name ? true : false}
        helperText={errors.name}>
    </TextField>
    
    <TextField
    id="email"
    label="Email"
    variant="outlined"
    size="small"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    error={errors.email ? true : false}
        helperText={errors.email}
    style={{margin:10}}>
    </TextField>
    </FormControl>
    <FormControl fullWidth error={errors.status ? true : false}>
    <InputLabel id="demo-simple-select-label">status</InputLabel>
    
    <Select
    id="status"
    labelId="demo-simple-select-label"
    value={status}
    onChange={handleChange}
    sx={{
        width:220,
        height:40,
        margin:1
       
      }}
      helperText={errors.status}
    >
    <MenuItem value={"Active"}>Active</MenuItem>
    <MenuItem value={"InActive"}>InActive</MenuItem>
    
    </Select>
    {/* {errors.status && <p>{errors.status}</p>} */}
    
    
    <TextField
    id="phone"
    label="PhoneNo"
    variant="outlined"
    size="small"
    value={phoneno}
    onChange={(e)=>setPhoneno(e.target.value)}
    error={errors.phone ? true : false}
        helperText={errors.phone}
    style={{margin:10}}>
    </TextField>
    
    <TextField
    id="organization"
    label="OrganizationName"
    variant="outlined"
    size="small"
    value={organizationname}
    onChange={(e)=>setOrgname(e.target.value)}
    error={errors.organization ? true : false}
        helperText={errors.organization}
    style={{margin:10}}>
    </TextField>
    <Button sx={{margin:1}}variant="contained"onClick={handleSubmit}>Add</Button>
    </FormControl>
     </Box>
        
    </Box>
  )
}

export default Create;