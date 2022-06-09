import React from 'react'

import { Container, Grid, Typography } from '@mui/material';

const History = () => {
  return (
    <Container maxWidth='x1'>
      <Grid container>
        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
          <Typography textAlign='center' gutterBottom variant='h6' sx={{width: '80%'}}>
            Empresa Familiar con las Mejores recetas
          </Typography>
          <Typography textAlign='center' variant='body1' sx={{width: '60%'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. 
          </Typography>
        </Grid>

        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
          
        </Grid>

        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
          
        </Grid>
        
        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
          <Typography textAlign='center' gutterBottom variant='h6' sx={{width: '80%'}}>
            Empresa Familiar con las Mejores recetas
          </Typography>
          <Typography textAlign='center' variant='body1' sx={{width: '60%'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. 
          </Typography>
        </Grid>

      </Grid>
    </Container>
  )
}

export default History