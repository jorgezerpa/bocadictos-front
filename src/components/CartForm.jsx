import React, { useRef } from 'react'

import { Container, Box, Typography, TextField } from '@mui/material';

const CartForm = ({ handleInputSubmit }) => {

  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);

  const setValues = () => {
    handleInputSubmit({
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    })
  }

  return (
    <Container maxWidth='x1' >
        <Box>
            <Typography variant='h5' gutterBottom>
                Datos de Cóntacto
            </Typography>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '30px' }} >
              <TextField onChange={setValues} inputRef={name} type='text' id="outlined-basic" label="tu nombre" variant="outlined" />
              <TextField onChange={setValues} inputRef={phone} type='number' id="outlined-basic" label="tu celular" variant="outlined" />
              <TextField onChange={setValues} inputRef={email} type='email' id="outlined-basic" label="tu correo (opcional)" variant="outlined" />
            </Box>
        </Box>
    </Container>
  )
}

export default CartForm