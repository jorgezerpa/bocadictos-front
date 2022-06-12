import React, { useContext, useState } from 'react';
import CartContext from '../context/cartContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@emotion/react';

import { CartStepper } from './';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%' },
  height: '80vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs:1, sm: 4 },
  overflowY: 'scroll'
};

const Cart = ({ cart, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [ state ] = useContext(CartContext);
  const [orderData, setOrderData] =  useState({
        contactInfo: {},
         orderInfo: [...state.products]
        });

    console.log(orderData);

  const handleInputSubmit = (data) => {
    setOrderData({
      ...orderData,
      contactInfo: data
    })
    
  }
  
  const handleBuy = () => {
    setOrderData({
      ...orderData,
      orderInfo: [ ...state.products ]
    })
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <CartStepper handleInputSubmit={handleInputSubmit} handleBuy={handleBuy} />
        </Box>
      </Modal>
    </div>
  );
}


export default Cart;