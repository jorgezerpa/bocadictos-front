import React, { useState, useContext } from 'react';
import CartContext from '../context/cartContext';

import { Container, Grid, Typography, Button, Box } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StoreCard } from './';

import '../styles/Inputs.css';

const StoreGrid = ({ products, open, setOpen }) => {
    const [state] = useContext(CartContext);
    console.log(state);

    const handleOpen = () => {
        setOpen(true)
    };

    return (
    <Container maxWidth='x1' >
        <Box sx={{ display: 'flex', flexDirection: 'row', mb:3 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='primary' onClick={handleOpen} >
                <ShoppingCartIcon />
            </Button>
        </Box>
        <Grid container spacing={6} >
            { products.map((product, index)=>{
                let isAddedBool;    
                state.products.forEach((stateProduct, index)=>{
                    stateProduct.id === product.id ? isAddedBool = true : isAddedBool = false;
                    stateProduct.id === state.removedElementId ? isAddedBool = false : isAddedBool = true;                     
                })

                return(
                    <Grid item xs={12} sm={4} md={3}  key={product.name+index}>
                        <StoreCard product={product} isAddedBool={isAddedBool} />
                    </Grid>
                )
            })}
        </Grid>
    </Container>
  )
}

export default StoreGrid