import React, { useState, useContext, useRef } from 'react';
import CartContext from '../context/cartContext';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Input } from '@mui/material'; 
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { increaseProductQuantity } from '../store/states';

const StoreCard = ({ product }) => {
    const myTheme = useTheme(); 
    const [ state, dispatch, addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange] = useContext(CartContext);
    const [isWriting, setIsWriting] = useState(false);
    const inputQuantity = useRef(null);


    const HandleAddToCart = (product) => dispatch(addProduct(product));
    const HandleRemoveFromCart = (product) => dispatch(removeProduct(product));
    const handleIncreaseQuantity = (product) => dispatch(increaseQuantity(product));
    const handleDecreaseQuantity = (product) => dispatch(decreaseQuantity(product));

    const handleChange = () => {
        setIsWriting(true);
        dispatch(manualQuantityChange(product, inputQuantity.current.value));
    }
    
    const handleOnBlur = () => {
        setIsWriting(false);
        //change isNaN for isInteger????
        let newValue = (inputQuantity.current.value=="" || inputQuantity.current.value<=0 ) ? 0 : inputQuantity.current.value;
        dispatch(manualQuantityChange(product, newValue));
    }
    
    
  return (
    <Card>
        <CardMedia sx={{ position: 'relative', height: '100px', overflow: 'hidden'  }}>
            <img src={product.image} alt=""  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} />
        </CardMedia>
            <CardContent>
                <Typography variant='h6' gutterBottom sx={{fontSize: '1rem', fontWeight: 'bold'}}>{ product.name }</Typography>
                <Typography variant='body1'  gutterBottom sx={{fontSize: '.7rem' }} >{ product.description }</Typography>
                <Typography sx={{fontSize: '.8rem', fontStyle:'italic'}} >{ product.price} $</Typography>
            </CardContent>
            
            <CardActions sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}} >
                { product.quantity===0 && <Button variant='cardButton' onClick={()=>HandleAddToCart(product)} >Agregar</Button> }
                { (product.quantity>0 || isWriting ) && (
                    <>
                        <Button variant='cardButton' onClick={()=>HandleRemoveFromCart(product)} >remover</Button> 

                        <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <RemoveCircleIcon onClick={()=>handleDecreaseQuantity(product)}  sx={{color: myTheme.palette.primary.light }} />
                            <input ref={inputQuantity} onBlur={handleOnBlur} onChange={handleChange}  type='number' value={ product.quantity } style={{ width: '2rem' }} ></input>
                            <AddBoxIcon onClick={()=>handleIncreaseQuantity(product)} sx={{color: myTheme.palette.primary.light }} />
                        </Box>
                    </>
                ) }
        </CardActions>
    </Card>
  )
}

export default StoreCard