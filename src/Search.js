import React,{useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import { useDispatch } from 'react-redux';
import { searchUsers } from './UserReducer';
function Search() {
  const[name,setName]=useState('');
  const[phoneno,setPhoneno]=useState('');
    const[status,setStatus]=useState("");
    
    const dispatch=useDispatch();
    const handleChange=(event)=>{
        setStatus(event.target.value);
    }
    const SearchHandler=(e)=>{
      e.preventDefault();
      console.log("search");
      const searchCriteria = {
        username: name,
        phoneno: phoneno,
        status: status,
      };
      console.log("searchcriteria",searchCriteria);
      dispatch(searchUsers(searchCriteria));
      if (name !== '') {
        setName('');
      }
      if (phoneno !== '') {
        setPhoneno('');
      }
      if (status !== '') {
        setStatus('');
      }
      
    }
  return (
    <Box>
<Box sx={{border:1,
          height:25,
          padding:1}}>Search Criteria</Box>
          <Box sx={{border:1}}>
          <FormControl>
        <TextField
        label="UserName"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e)=>setName(e.target.value)}>
        </TextField>
        </FormControl>
        <FormControl>
        <TextField
        label="Phone"
        variant="outlined"
        size="small"
        value={phoneno}
        onChange={(e)=>setPhoneno(e.target.value)}
        style={{margin:10}}>
        </TextField>
        </FormControl>
        <FormControl>
        <InputLabel id="demo-simple-select-label">status</InputLabel>
        <Box sx={{minWidth:50}}></Box>
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
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="InActive">InActive</MenuItem>
        <MenuItem value="All">All</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
            <Button sx={{margin:1}}variant="outlined" onClick={SearchHandler}>Search</Button>
        </FormControl>
        
          </Box>
    
    

        
        
        
    
    </Box>
  )
    
    
}

export default Search;