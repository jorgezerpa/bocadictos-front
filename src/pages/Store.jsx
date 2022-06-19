import React, { useReducer, useEffect, useState } from 'react';
import CartContext from '../context/cartContext';
import { StoreGrid, Cart } from '../components';
import FetchStore from '../utils/fetchStore';

import CART_INITIAL_STATE from '../store/initialState';
import { CartReducer } from '../store/cartReducer';
import { addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange, setCart } from '../store/actions';

import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';


const fetchStore = new FetchStore();

export default function Store() {
  const [open, setOpen] = React.useState(false);
  const [productsState, setProductsState] = useState('loading');

  const [value, setValue] = React.useState('1');
  const [state, dispatch] = useReducer(
      CartReducer,
      CART_INITIAL_STATE,
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    fetchStore.getList()
      .then(data => {
        setProductsState('success');
        return data.json()
      })
      .then(products=>dispatch(setCart(products.data)))
      .catch(e=>{
        setProductsState('error');
        console.log(e)
      })
  }, [])


  return (
    <CartContext.Provider value={[ state, dispatch, addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange]}>
      
      {productsState === 'loading' && (
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Typography>Cargando...</Typography>
        </Box>
      )} 
      {productsState === 'error' && (
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Typography>¡Ups! no se pudieron cargar los Productos. Intenta reacargar la página.</Typography>
        </Box>
      )} 

      {productsState === 'success' && (
        <>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable" onChange={handleChange} aria-label="" scrollButtons={true} allowScrollButtonsMobile>
                  <Tab label="Todo" value="1" />
                  <Tab label="Dulce" value="2" />
                  <Tab label="Salado" value="3" />
                  <Tab label="Combos" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                  <StoreGrid products={state.products} open={open} setOpen={setOpen} />
              </TabPanel>
              <TabPanel value="2">
                  <StoreGrid products={state.products} open={open} setOpen={setOpen} />
              </TabPanel>
              <TabPanel value="3">
                  <StoreGrid products={state.products} open={open} setOpen={setOpen} />
              </TabPanel>
              <TabPanel value="4">
                  <StoreGrid products={state.products} open={open} setOpen={setOpen} />
              </TabPanel>

            </TabContext>
          </Box>

          <Cart cart={state} open={open} setOpen={setOpen} />
        </>
      )}


     </CartContext.Provider >
  );
}