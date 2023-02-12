import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {

    const [drawer, toggleDrawer] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    function toggleRegisterModal(){
      setOpenRegister(true);
      toggleDrawer(false);
    }

    function closeHamburger() {
      toggleDrawer(false);
    }

    function toggleLoginModal(){
      setOpenLogin(true);
      toggleDrawer(false);
    }


    let registerModal = "";
    if(openRegister) {
    registerModal = " ";
    }


  return (
    <Box position="absolute" sx={{  flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#990000"}}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Times New Roman',
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 30
            }}
          >
            Study Buddy
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: "auto"}}
            onClick={() => toggleDrawer(true)}
          ><MenuIcon/></IconButton>

    <SwipeableDrawer
    anchor ={'right'}
      open={drawer}
      //onBlur={() => toggleDrawer(false)}
    PaperProps={{
        sx: {
        backgroundColor: "#D9D9D9",
        width:'50vh',
        }
    }}
        >
    <List sx={{ width: '60%', bgcolor: 'background.paper' , m: 2, backgroundColor:  "#D9D9D9"}}>
      <ListItem>
      <Button sx={{fontSize: 20, left:'120%'}} onClick={closeHamburger}> 
      <CloseIcon/> 
      </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20}}> In Person </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20}} > Virtual </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20}} onClick={toggleLoginModal}> Login </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20}} onClick={toggleRegisterModal}> Register </Button>
      </ListItem>

    </List>
        </SwipeableDrawer>
          
        </Toolbar>
      </AppBar>
      {openRegister && <RegisterModal open={openRegister} setOpen={setOpenRegister}/>}
      {openLogin && <LoginModal open={openLogin} setOpen={setOpenLogin}/>}
    </Box>
  )
}
