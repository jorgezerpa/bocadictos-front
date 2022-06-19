import React from 'react'
import { ContactMap } from '../components';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{minHeight: '60vh', py:5}} maxWidth='x1'>
      <Grid container>
        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center' sx={{overflow:'hidden', position: 'relative'}}>
              <ContactMap />          
        </Grid>
        
        <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
            <Box mb={2} display='flex' justifyContent='center' alignItems='center' gap='30px'>
              <Button variant='primary'>Mensaje</Button>
              <Button variant='secondary'>Tienda</Button>
            </Box>
            <Typography textAlign='center' variant='caption'>Local, calle, lagunillas. referencia con otro lugar</Typography>
            <Typography textAlign='center' variant='caption'>Icon +55 555 55555 </Typography>
            <Typography textAlign='center' variant='caption'>icon @bocadictos.mv </Typography>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Contact