import React from 'react'
import { useTheme } from '@emotion/react';
import { Grid, Typography, Container, Box, Card, CardContent } from '@mui/material';
import { Fake } from '../assets';

const testimonies = [1,2,3];

const Testimonies = () => {
  const myTheme = useTheme();

  return (
    <Container sx={{ position: 'relative'}} maxWidth="xl">
      <Box position='absolute' sx={{ overflow:'hidden', minHeight: '100vh', width: '100%', top: '0', left: '0'}} >
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-30px, -120px)', width: '100px', height: '60px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(140px, 30px)', width: '100px', height: '60px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-50px, 150px)', width: '100px', height: '60px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-250px, -20px)', width: '120px', height: '99px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(110px, -150px)', width: '120px', height: '99px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(270px, -270px)', width: '179px', height: '159px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(420px, 0px)', width: '140px', height: '135px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(220px, 150px)', width: '194px', height: '121px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-400px, 130px)', width: '129px', height: '105px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-500px, -70px)', width: '161px', height: '157px' }} ></div>
          <div style={{ border: '1px solid black', position:'absolute', top:'50%', left: '50%', transform: 'translate(-210px, -200px)', width: '122px', height: '87px' }} ></div>
      </Box>


      <Box mt={10} sx={{  zIndex:'1000', display: 'flex', background: '#fff', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', overflow: 'hidden', }}>
          <Typography textAlign='center' variant='h5' sx={{ zIndex:'1000', background: '#fff', border: `5px solid ${myTheme.palette.primary.light}`, padding: '20px', borderRadius: '10px'}} >
            Más de 7 años <br/> Complaciendo tu <br/>paladar
          </Typography>
      </Box>

      <Box>
        <Typography mt={10} mb={10} textAlign='center' variant='h3'>Algunos de nuestros clientes</Typography>

        <Grid container flex justifyContent='space-evenly'>
          { testimonies.map((item, index)=>(
              <Grid mb={10} item xs={10} sm={4} md={3}>
                <Card variant='testimonies' sx={{
                  border: `2px dashed ${myTheme.palette.primary.light}`
                   }}>
                  <CardContent>
                    <Typography textAlign='left' variant='body1'>Lorem ifdgdsrgsdfpsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</Typography>
                    <Typography display='block' mt={4} textAlign='right' variant='caption'>Jhon Due</Typography>
                  </CardContent>
                </Card>
              </Grid>
          ))}

        </Grid>

      </Box>

    </Container>
  )
}

export default Testimonies