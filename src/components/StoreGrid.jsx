import React, { useState, useContext } from 'react';

import { Container, Grid, Typography } from '@mui/material'; 
import { StoreCard } from './';

import '../styles/Inputs.css';

const StoreGrid = ({ products }) => {
    return (
    <Container maxWidth='x1' >
        <Typography variant='h5' textAlign='right' gutterBottom >carrito</Typography>
        <Grid container spacing={6} >
            { products.map((product, index)=>(
                <Grid item xs={11} sm={4} md={3}  key={product.name+index}>
                    <StoreCard product={product} />
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default StoreGrid