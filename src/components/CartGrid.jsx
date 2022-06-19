import React, { useState, useContext } from 'react';
import CartContext from '../context/cartContext';

import { Container, Grid } from '@mui/material'; 
import { CartCard } from './';

import '../styles/Inputs.css';

const CartGrid = ({  }) => {
    const [state] = useContext(CartContext);

    return (
    <Container maxWidth='x1' sx={{ padding: '0'}} >
        <Grid container spacing={6} >
            { state.products.filter(product=> product.quantity>0 || product.quantity==="").map((product, index)=>(
                <Grid item xs={12} sm={6}   key={product.name+index}>
                    <CartCard product={ product } />       
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default CartGrid