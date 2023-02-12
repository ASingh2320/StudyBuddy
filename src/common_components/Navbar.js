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
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
//
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';

export default function Navbar() {

    const [drawer, toggleDrawer] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [leftdrawer, toggleLeft] = useState(false);
    const [selectMode, toggleSelect] = useState(false);
    const [markers, editMarkers] = useState([]);

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


    const classes = [
        { label: 'CSE', id: 1 },
        { label: 'AMS', id: 2 },
        { label: 'IAE', id: 3 }
        // ...
      ];
      const classesNum = [
        { label: '220', id: 1 },
        { label: '310', id: 2 },
        { label: '101', id: 3 }
        // ...
      ];

    const location_select = () => {
        toggleLeft(false);
        toggleSelect(true);
    }
  return (
    <>
    
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
      <ListItem >
      <Button sx={{fontSize: 20, left:'130%'}} onClick={closeHamburger}> 
      <CloseIcon/> 
      </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}}> In Person </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}} > Virtual </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}} onClick={toggleLoginModal}> Login </Button>
      </ListItem>
      <ListItem>
      <Button sx={{fontSize: 20}} onClick={toggleRegisterModal}> Register </Button>
      </ListItem>

    </List>
        </SwipeableDrawer>
          

    <SwipeableDrawer
    anchor ={'left'}
      open={leftdrawer}
    PaperProps={{
        sx: {
        backgroundColor: "#D9D9D9"
        }
    }}
        >
    <FormControl>
                <TextField id="outlined-basic" variant="outlined" defaultValue="Group Name"/>
                <Autocomplete
                    style={{ marginBottom: '20px' }}
                    disablePortal
                    id="combo-box-demo"
                    options={classes}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Class Name" />}
                />
                <Autocomplete
                    style={{ marginBottom: '20px' }}
                    disablePortal
                    id="combo-box-demo"
                    options={classesNum}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Class Number" />}
                />
                <TextField id="outlined-basic" variant="outlined" defaultValue="Max Count" type="number"/>
                <Button onClick={location_select} variant="contained" sx={{fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold', marginRight: '10px'}}>
                    Select Location
                </Button>
                
        
    </FormControl>
        </SwipeableDrawer>
          
        </Toolbar>

        <Button onClick={() => toggleLeft(true)} variant="contained" sx={{position: "fixed", bottom: "20px", left: "10px", fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold', marginRight: '10px'}}>
            <AddIcon/>
        </Button>
      </AppBar>
      {openRegister && <RegisterModal open={openRegister} setOpen={setOpenRegister}/>}
      {openLogin && <LoginModal open={openLogin} setOpen={setOpenLogin}/>}
    </Box>


</>
  )
}
