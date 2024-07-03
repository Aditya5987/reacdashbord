import React from 'react'
import Sidenav from '../Compo/Components/Sidenav'
import {Box, Typography} from '@mui/material';
import NavBar from '../Compo/Components/NavBar';






export default function About() {
  return (
    <>
    <NavBar/>
      <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
     
      <Typography>Settings</Typography>
      </Box>

      </Box>
   
    </>
  )
}
