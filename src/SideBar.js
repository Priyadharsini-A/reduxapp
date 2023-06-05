import React from 'react';
import './App.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@mui/material';
import {Box} from '@mui/material';


function SideBar() {
  return (
    
    <div>


        
       
        <Box
    sx={{
       
        height:700,
        backgroundColor:"pink"
    }}>
        <List>
            <ListItem>
                <CampaignIcon/>
                <Typography>UserSetup</Typography>                         

            </ListItem>
            <ListItem>
                <SettingsIcon/>
                <Typography>RolesetUp</Typography>                            

            </ListItem>
            <ListItem>
                <CloudUploadIcon/>
                <Typography>Settings</Typography>                         
            </ListItem>
        </List>
        
    </Box>
        
        
    </div>
  )
}

export default SideBar;