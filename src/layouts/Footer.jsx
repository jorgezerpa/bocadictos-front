import React from 'react'

import { Logo } from '../assets';
import { Typography, Box, Grid, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const myTheme = useTheme();

  return (
    <Container maxWidth='x1' sx={{ padding: '30px 0 30px 0',  background: `linear-gradient(90deg, ${ myTheme.palette.primary.main },  ${ myTheme.palette.primary.light })` }} >
        <Grid container display='flex' justifyContent='center' alignItems='center'>
          <Grid sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}} item xs={4}>
            <img width='50px' src={Logo} alt="" />        
          </Grid>
    
          <Grid sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}} item xs={4}>
              
          </Grid>
    
          <Grid sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', gap:'20px' }} item xs={4}>
              <InstagramIcon  sx={{width: '20px', color: myTheme.palette.secondary.dark }}  /> 
              <WhatsAppIcon   sx={{width: '20px', color: myTheme.palette.primary.dark }} />
          </Grid>
    
        </Grid>
    </Container>
  )
}

export default Footer