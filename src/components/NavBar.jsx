import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Avatar } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  

  const navigate = useNavigate();



  const HandleNavigation = (navRoute) =>{
    navigate(navRoute);
  };
  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: '#f44336', top: 0, left: 0, right: 0 }}>
      <Toolbar style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between' }}>
      <Avatar>EF</Avatar>
        <Button style={{fontFamily: 'Open Sans, sans-serif'}} color="inherit" onClick={() => HandleNavigation("/")}>Home</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif'}} color="inherit" onClick={()=>HandleNavigation("/aboutMe")} >About me</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif'}} color="inherit" onClick={()=>HandleNavigation("/skills")} >Skills</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif'}} color="inherit"  onClick={()=>HandleNavigation("/movies")}>Movies</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif'}} color="inherit"  onClick={()=>HandleNavigation("/books")}>Books</Button>

        
      </Toolbar>
    </AppBar>
    <br/>
    <br/>

    </>
  );
};

export default NavBar;
