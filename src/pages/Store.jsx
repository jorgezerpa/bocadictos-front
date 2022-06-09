import React, { useReducer } from 'react';
import CartContext from '../context/cartContext';
import { StoreGrid, Cart } from '../components';
import { articles } from '../constants';

import CART_INITIAL_STATE from '../store/initialState';
import { CartReducer } from '../store/cartReducer';
import { addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange } from '../store/actions';

import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';


export default function Store() {
  const [value, setValue] = React.useState('1');
  const [state, dispatch] = useReducer(
      CartReducer,
      CART_INITIAL_STATE,
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CartContext.Provider value={[ state, dispatch, addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange]}>

        <Box sx={{ width: '100%', typography: 'body1' }}>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList centered onChange={handleChange} aria-label="">
                <Tab label="Todo" value="1" />
                <Tab label="Dulce" value="2" />
                <Tab label="Salado" value="3" />
                <Tab label="Combos" value="4" />
                <Typography>Cart</Typography>
              </TabList>
            </Box>
            <TabPanel value="1">
                <StoreGrid products={articles} />
            </TabPanel>
            <TabPanel value="2">
                <StoreGrid products={articles} />
            </TabPanel>
            <TabPanel value="3">
                <StoreGrid products={articles} />
            </TabPanel>
            <TabPanel value="4">
                <StoreGrid products={articles} />
            </TabPanel>

          </TabContext>
        </Box>

        <Cart cart={state} />


     </CartContext.Provider >
  );
}