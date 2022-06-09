import React from 'react';

import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Logo } from '../assets';


const pages = ['clients', 'history', 'contact'];

const Navbar = () => {
  const myTheme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='transparent' sx={{boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' },}}>
          <img width='50px' src={Logo} alt="" />
          </Box>


          {/* MOBILE MENU  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
              <MenuIcon />
            </IconButton>
 
            <Menu id="menu-appbar" onClose={handleCloseNavMenu} anchorEl={anchorElNav} anchorOrigin={{   vertical: 'bottom',   horizontal: 'left', }} keepMounted transformOrigin={{   vertical: 'top',   horizontal: 'left', }} open={Boolean(anchorElNav)} sx={{   display: { xs: 'block', md: 'none' }, }}>
              {pages.map((page) => (
                <MenuItem component='a' href={"#"+page} key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{color: '#000'}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <Typography noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1}}>
            <img width='50px' src={Logo} alt="" />
          </Typography>

            {/* DESKTOP MENU  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button component='a' href={"#"+page} variant='menu' key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display:'flex', gap: '5px', alignItems: 'center' }}>
              <InstagramIcon  sx={{width: '20px', color: myTheme.palette.secondary.main }}  />
              <WhatsAppIcon   sx={{width: '20px', color: myTheme.palette.primary.main }} />
              <Button component={Link} to='/store' variant='secondary'>Tienda</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

}

export default Navbar















