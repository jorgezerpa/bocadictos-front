import React, { useContext } from 'react';
import CartContext from '../context/cartContext';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CartGrid, CartForm } from './';

const steps = ['Carrito', 'Datos'];

const CartStepper = ({ handleInputSubmit, handleBuy }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [state] = useContext(CartContext);

  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{marginBottom: '40px'}} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      
      {activeStep === steps.length && (
        <React.Fragment>
          <Typography variant='h6' >
            Tú Pedido fue realizado con éxito!  
          </Typography>
          <Typography variant='body1' >
            en breve alguien de nuestro equipo se podrá en contácto con tigo.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button variant='secondary' onClick={handleReset}>Volver a la tienda</Button>
          </Box>
        </React.Fragment>
      )}

      {activeStep === 0 && (
        <React.Fragment>
          { state.products.length > 0 &&  <CartGrid />}
          { state.products.length === 0 && (
            <Typography variant='h6'>Aún no hay nada en tu carrito</Typography>
          )}

         
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            atras
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} disabled={state.products.length === 0} >
            {activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
          </Button>
        </Box>
      </React.Fragment>
      )} 
      
      {activeStep === 1 && (
        <React.Fragment>
          <CartForm handleInputSubmit = {handleInputSubmit} />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              atras
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={() => {
              handleNext();
              handleBuy();
            }} disabled={state.products.length === 0}>
              {activeStep === steps.length - 1 ? 'Comprar' : 'siguiente'}
            </Button>
          </Box>
        </React.Fragment>
      )} 
      
    </Box>
  );
}



export default CartStepper;