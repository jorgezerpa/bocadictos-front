import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, Store, NotFound } from './pages';
import { Navbar } from './components';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import myTheme from './styles/myTheme';


const App = () => {
  return (
    <>
    <ThemeProvider theme={myTheme} >
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
    </ThemeProvider>
    </>
  )
}

export default App