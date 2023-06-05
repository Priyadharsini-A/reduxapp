import React from 'react';
import UserDetails from './UserDetails';
//import AppBar from '@mui/material/AppBar';
import { Box, Button, Grid, Typography } from '@mui/material';
import SideBar from './SideBar';
import Search from './Search';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    

     <Grid container >
        <Grid item xs={1}>
       <SideBar/>
    </Grid>
    <Grid item xs={11}>
      <Box sx={{display:'flex',flexDirection:'column', }}>
        <Box sx={{
backgroundColor:"#1976d2",
height:75,
display:'flex',
justifyContent:'space-between',
alignItems:'center',

        }}>
            <Box>
        <Typography sx={{width:200,display:'flex',justifyContent:'center',color:'white'}}>UserList</Typography>

            </Box>
            
               <Box sx={{width:200,display:'flex',justifyContent:'center'}}>
                {/* <Button variant="contained" >CreateUser</Button> */}
                <Link to="/create">CreateUser</Link>
               </Box>
            
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',margin:2}}>
        <Box><Search/></Box>
        <Box><UserDetails></UserDetails></Box>

        </Box>
        
        </Box>
    


        </Grid>
        
    </Grid> 





    </>
  )
}

export default Home;