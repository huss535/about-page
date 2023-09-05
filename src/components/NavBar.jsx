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
    <AppBar elevation={2} position="fixed" sx={{ backgroundColor: 'beige', top: 0, left: 0, right: 0,display: 'flex', justifyContent: 'space-between',width:"100%" }}>
      <Toolbar style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
           
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            >

    <MenuOutlinedIcon fontSize="large"/>
      </IconButton>

      <Drawer
      open={open}
      PaperProps={{
        sx: {
          width: '70%', // Adjust the width to your desired size
          height:'100%'
        },
      }}
      >
        <div style={{backgroundColor:"#E7473C",height:"100%"}}>
        <DrawerHeader>

        <IconButton onClick={handleDrawerClose}>
            <ChevronRight fontSize="large" />
          </IconButton>
        </DrawerHeader>
      
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0,fontSize:'x-large' }} onClick={() => HandleNavigation("/")}>Home</CustomButton>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0,fontSize:'x-large'  }} onClick={() => HandleNavigation("/aboutMe")}>About me</CustomButton>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0,fontSize:'x-large'  }} onClick={() => HandleNavigation("/skills")}>Skills</CustomButton>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0,fontSize:'x-large'  }} onClick={() => HandleNavigation("/movies")}>Movies</CustomButton>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0,fontSize:'x-large'  }} onClick={() => HandleNavigation("/books")}>Books</CustomButton>
      <CustomButton style={{  margin: 0, padding: "20px", borderRadius: 0 ,fontSize:'x-large' }} onClick={() => HandleNavigation("/music")}>PlayList</CustomButton>
    </div>
        </div>
      </Drawer>
      <CustomButton style={{margin:0,marginInline:30,backgroundColor:"#E7473C"}}   onClick={() => HandleNavigation("/feedback")}>Give Feedback</CustomButton>

        <Avatar  sx={{
    backgroundColor: 'inherit',
    border:'solid',
    borderWidth:3,
    color: 'black'
  }} >EF</Avatar>
      </Toolbar>
    </AppBar>
    <br/>
    <br/>

    </div>
  );
};

export default NavBar;
