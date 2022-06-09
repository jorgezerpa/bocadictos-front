import React from 'react'

import { Container, Box, Typography, TextField } from '@mui/material';

const CartForm = () => {
  return (
    <Container maxWidth='x1' >
        <Box>
            <Typography variant='body1'>
                Tu orden esta casi lista <br />
                Llena los datos y alguien de nuestro equipo s pondrá en contácto pronto con tigo!
            </Typography>
            <TextField id="outlined-basic" label="nombre" variant="outlined" />
            <TextField id="outlined-basic" label="celular" variant="outlined" />
        </Box>
    </Container>
  )
}

export default CartForm