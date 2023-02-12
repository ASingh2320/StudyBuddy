import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Navbar() {

    const [drawer, toggleDrawer] = useState(true);

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
  <div>
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
      <ListItem sx={{border: "1px solid black"}}>
        <Typography sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif', border: "1px solid black"}}> In Person </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}}> Virtual </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}}> Login </Typography>
      </ListItem>
      <ListItem>
      <Typography sx={{fontSize: 20, fontFamily: '"Helvetica", "Arial", sans-serif'}}> Register </Typography>
      </ListItem>
    </List>
        </SwipeableDrawer>
    </div>  
        </Toolbar>
      </AppBar>
    </Box>
  )
}
