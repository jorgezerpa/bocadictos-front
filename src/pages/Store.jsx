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
  const [categories, setCategories] = useState([]);

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
    
    fetchStore.getCategories()
      .then(data => {
        return data.json()
      })
      .then(categories=>{
        setCategories(categories.data);
      })
      .catch(e=>{
        setProductsState('error');
        console.log(e)
      })
  }, [])
  console.log(categories);


  return (
    <CartContext.Provider value={[ state, dispatch, addProduct, removeProduct, increaseQuantity, decreaseQuantity, manualQuantityChange]}>
      
      {productsState === 'loading' && (
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Typography textAlign='center' m={10} variant='h5'>Cargando...</Typography>
        </Box>
      )} 
      {productsState === 'error' && (
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Typography textAlign='center' m={10} variant='h5'>¡Ups! no se pudieron cargar los Productos. Intenta recargar la página.</Typography>
        </Box>
      )} 

      {productsState === 'success' && (
        <>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable" onChange={handleChange} aria-label="" scrollButtons={true} allowScrollButtonsMobile>
                  <Tab label="Todo" value='1' />
                  { categories.map((categorie, i)=>(
                    <Tab key={categorie.name + categorie.id} label={ categorie.name } value={`${i+2}`} />
                  ))}
                </TabList>
              </Box>
              <TabPanel value='1'>
                  <StoreGrid products={state.products} open={open} setOpen={setOpen} />
              </TabPanel>
              { categories.map((categorie, i)=>(
                <TabPanel key={categorie.name + categorie.id + 'tab'} value={`${i+2}`}>
                    <StoreGrid products={state.products.filter(product=>product.categorie===categorie.name)} open={open} setOpen={setOpen} />
                </TabPanel>
              ))}
            </TabContext>
          </Box>

          <Cart cart={state} open={open} setOpen={setOpen} />
        </>
      )}


     </CartContext.Provider >
  );
}