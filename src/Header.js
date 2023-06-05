import React from 'react';
import './App.css';

import HouseIcon from '@mui/icons-material/House';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box,AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';





function Header() {
  
  return (
//     <header className='header'>
// <div className='logo'>
//     <img src='/logo.jpg' alt="logo" />
// </div>
// <div className='logoflex'>
//   <div><HouseIcon/></div>
//   <div><PermIdentityIcon></PermIdentityIcon></div>
//   <div></div>

// </div>
//     </header>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logoipsum
          </Typography>
          <Box>
            <HouseIcon/>
            <PermIdentityIcon/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Header;