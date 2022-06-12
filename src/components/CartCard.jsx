import React, { useState, useContext, useRef } from 'react';
import CartContext from '../context/cartContext';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Input } from '@mui/material'; 
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartCard = ({ product }) => {
    const myTheme = useTheme(); 
    const [isAdded, setIsAdded] = useState(false);
    const [ state, dispatch, addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange] = useContext(CartContext);
    const inputQuantity = useRef(null);



    const HandleAddToCart = (product) => {
        dispatch(addProduct(product))
        setIsAdded(true);
    }
    
    const HandleRemoveFromCart = (product) => {
        dispatch(removeProduct(product))
        setIsAdded(false);
    }
    
    const handleIncreaseQuantity = (product) => {
        dispatch(increaseQuantity(product))
    }
    
    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseQuantity(product))
        if(product.quantity - 1 === 0) setIsAdded(false);
    }

    const handleChange = () => {
        //avoid console advertisment --> can not parse NaN. if !isNaN, with onBlur function, we set to 1.
        let newValue =  Number.isNaN(inputQuantity.current.value) ? parseInt(inputQuantity.current.value) : inputQuantity.current.value;
        dispatch(manualQuantityChange(product, newValue));
    }
    
    const handleOnBlur = () => {
        let newValue = parseInt(inputQuantity.current.value);
        if(!Number.isInteger(newValue) || newValue<=0  ){
            newValue = 0;
            setIsAdded(false);
            dispatch(removeProduct(product));
            return;
        } 
        dispatch(manualQuantityChange(product, parseInt(newValue)))
    }


  return (
    <Card >
        <CardMedia sx={{ position: 'relative', height: '100px', overflow: 'hidden'  }}>
            <img src={product.image} alt=""  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} />
        </CardMedia>
            <CardContent>
                <Typography variant='h6' gutterBottom sx={{fontSize: '1rem', fontWeight: 'bold'}}>{ product.name }</Typography>
                <Typography sx={{fontSize: '.8rem', fontStyle:'italic'}} >{ product.price} $</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap:'wrap'}} >
                <Button variant='cardButton' onClick={()=>HandleRemoveFromCart(product)} >remover</Button> 
                
                <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <RemoveCircleIcon onClick={()=>handleDecreaseQuantity(product)}  sx={{color: myTheme.palette.primary.light }} />
                    <input ref={inputQuantity} onBlur={handleOnBlur} onChange={handleChange}  type='number' value={ product.quantity } style={{ width: '2rem' }} ></input>
                    <AddBoxIcon onClick={()=>handleIncreaseQuantity(product)} sx={{color: myTheme.palette.primary.light }} />
                </Box>
        </CardActions>
    </Card>
  )
}

export default CartCard