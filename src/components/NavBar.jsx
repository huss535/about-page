import React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { Avatar, MenuItem } from '@mui/joy';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate } from 'react-router-dom';
import "../index.css"
import CustomButton from './CustomButton';

const NavBar = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const buttonStyle = {

    fontFamily: 'Roboto, sans-serif',marginInline:40,color:'black'
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const navigate = useNavigate();


  const HandleNavigation = (navRoute) =>{
    navigate(navRoute);
  };
  return (
    <div style={{marginBottom:100,}}>
    <AppBar position="fixed" sx={{ backgroundColor: '#E7473C', top: 0, left: 0, right: 0 }}>
      <Toolbar style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            >

    <MenuOutlinedIcon/>
      </IconButton>

      <Drawer
      open={open}
      >
        <DrawerHeader>

        <IconButton onClick={handleDrawerClose}>
            <ChevronRight/>
          </IconButton>
        </DrawerHeader>
      
      <div style={{display:'flex',flexDirection:'column',gap:60}}>
        <CustomButton style={{margin:0,marginInline:30}}   onClick={() => HandleNavigation("/")}>Home</CustomButton>
        <CustomButton  style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/aboutMe")} >About me</CustomButton>
        <CustomButton  style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/skills")} >Skills</CustomButton>
        <CustomButton   style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/movies")}>Movies</CustomButton>
        <CustomButton   style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/books")}>Books</CustomButton>
        <CustomButton    style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/music")}>PlayList</CustomButton>
        

        </div>

      </Drawer>
      <CustomButton style={{margin:0,marginInline:30}}   onClick={() => HandleNavigation("/feedback")}>Give Feedback</CustomButton>

        <Avatar >EF</Avatar>
      </Toolbar>
    </AppBar>
    <br/>
    <br/>

    </div>
  );
};

export default NavBar;
