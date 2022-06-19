import React, { useContext, useState } from 'react';
import axios from 'axios';
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
  const [orderState, setOrderState] = useState('loading');
  const handleClose = () => setOpen(false);
  const [ state ] = useContext(CartContext);
  const [orderData, setOrderData] =  useState({});


  const handleInputSubmit = (data) => {
    setOrderData({
      ...orderData,
      products : state.products.filter(product => product.quantity !==0 ),
      clientInfo: data
    })

  }
  console.log(orderData);
  

const testData =  {
    "clientInfo": {
        "name":"Elon Musk",
        "phone":"0800pipirisnais",
        "email":"elon_and_amber@musk.com"
    },
    "products" : [
        {
            "name":"cachetadas de will smith",
            "quantity": "200",
            "price": "10"
        },
        {
            "name":"cachos de shakira",
            "quantity": "20",
            "price": "22"
        }
    ]
  }


  const handleBuy = () => {
    // const data = orderData;
    // console.log(orderData);
    axios.post('http://localhost:8000/api/v1/send-order', orderData )
      .then(response =>{
        setOrderState('success');
        console.log(response)
      })
      .catch(e=>{
        setOrderState('error');
        console.log(e)
      });
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <CartStepper orderState={ orderState } handleInputSubmit={handleInputSubmit} handleBuy={handleBuy} />
        </Box>
      </Modal>
    </div>
  );
}


export default Cart;



