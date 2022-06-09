import React from 'react';
import { Logo, bretzel, bretzelcontained, cake, cakeContained, croissant, croissantContained, cupcake, donut, donutContained } from '../assets';
import { Typography, Container, Box, Button } from '@mui/material';
import { RandomIcon } from './';

const myIcons = [ bretzel, bretzelcontained, cake, cakeContained, croissant, croissantContained, cupcake, donut, donutContained];

const Hero = () => {
  return (
    <>
    <Box position='absolute' sx={{ minHeight: '80vh', width: '100%', top: '0', left: '0'}} >
        <RandomIcon icon={donut} x={300} y={-140} />
        <RandomIcon icon={donut} x={-100} y={120} />
        <RandomIcon icon={donutContained} x={-500} y={-100} />
        <RandomIcon icon={ croissant } x={-250} y={-10} />
        <RandomIcon icon={ croissantContained } x={10} y={150} />
        <RandomIcon icon={ croissantContained } x={400} y={-80} />
        <RandomIcon icon={ croissantContained } x={300} y={150} />
        <RandomIcon icon={ bretzelcontained } x={100} y={100} />
        <RandomIcon icon={ bretzel } x={190} y={0} />
        <RandomIcon icon={ bretzel } x={-500} y={20} />
        <RandomIcon icon={ cupcake } x={-500} y={220} />
        <RandomIcon icon={ cupcake } x={-120} y={-100} />
        <RandomIcon icon={ cupcake } x={100} y={-120} />
        <RandomIcon icon={ cake } x={-234} y={60} />
        <RandomIcon icon={ cake } x={-300} y={-134} />



    </Box>

    <Container position='relative' maxWidth="xl" sx={{minHeight: '80vh'}}>

            <Box sx={{ display: 'flex', margin: '0 auto', marginTop: '30px', justifyContent:'center' }}>
                <img style={{margin: '0 auto', zIndex:'1000'}} src={Logo} alt='' width='200px' />
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', margin: '0 auto', marginTop: '30px', justifyContent:'center' }}>
                <Button variant='primary'>Tienda</Button>
                <Button variant='secondary' >Contacto</Button>
            </Box>
    </Container>
    </>
  )
}

export default Hero