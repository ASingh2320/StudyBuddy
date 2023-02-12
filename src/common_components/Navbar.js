import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
//
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';

export default function Navbar() {

    const [drawer, toggleDrawer] = useState(false);
    const [leftdrawer, toggleLeft] = useState(false);

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
      onBlur={() => toggleDrawer(false)}
    PaperProps={{
        sx: {
        backgroundColor: "#D9D9D9"
        }
    }}
        >
    <List sx={{ width: '100%', bgcolor: 'background.paper' , m: 2, backgroundColor:  "#D9D9D9"}}>
      <ListItem>
        <Typography sx={{fontSize: 20}}> In Person </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Virtual </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Login </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Register </Typography>
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
        <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="Group Name"/>
        
    </FormControl>

    <List sx={{ width: '100%', bgcolor: 'background.paper' , m: 2, backgroundColor:  "#D9D9D9"}}>
      <ListItem>
        <Typography sx={{fontSize: 20}}> In Person </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Virtual </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Login </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20}}> Register </Typography>
      </ListItem>
    </List>
        </SwipeableDrawer>
          
        </Toolbar>

        <Button onClick={() => toggleLeft(true)} variant="contained" sx={{position: "fixed", bottom: "20px", left: "10px", fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold', marginRight: '10px'}}>
            <AddIcon/>
        </Button>
      </AppBar>
      
    </Box>


</>
  )
}
