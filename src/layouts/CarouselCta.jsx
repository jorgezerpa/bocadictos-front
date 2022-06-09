import React from 'react'
import { Typography, Box, Button, Container } from '@mui/material';
import { Carousel } from '../components';

const CarouselCta = ({ text, buttonText, imagesArray }) => {
  return (
      <Container maxWidth='x1'>
        <Box display='flex' mb={3} gap={3}>
          <Typography variant='h5'>{text}</Typography>
          <Button variant='primary'>{buttonText}</Button>
        </Box>
        <Carousel imagesArray={imagesArray}/>
      </Container>
  )
}

export default CarouselCta