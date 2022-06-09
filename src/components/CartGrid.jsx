import React, { useState, useContext } from 'react';
import CartContext from '../context/cartContext';

import { Container, Grid } from '@mui/material'; 
import { CartCard } from './';

import '../styles/Inputs.css';

const CartGrid = ({  }) => {
    const [state] = useContext(CartContext);

    return (
    <Container maxWidth='x1' >
        <Grid container spacing={6} >
            { state.products.map((product, index)=>(
                <Grid item xs={11} sm={6}   key={product.name+index}>
                    <CartCard product={ product } />       
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default CartGrid