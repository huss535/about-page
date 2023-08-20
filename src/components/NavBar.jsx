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
    <div style={{marginBottom:100,}}>
    <AppBar position="fixed" sx={{ backgroundColor: '#FEE715', top: 0, left: 0, right: 0 }}>
      <Toolbar style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around' }}>
      
      <div>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}}  onClick={() => HandleNavigation("/")}>Home</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}} onClick={()=>HandleNavigation("/aboutMe")} >About me</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}} onClick={()=>HandleNavigation("/skills")} >Skills</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}}   onClick={()=>HandleNavigation("/movies")}>Movies</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}}   onClick={()=>HandleNavigation("/books")}>Books</Button>
        <Button style={{fontFamily: 'Open Sans, sans-serif', marginInline:40,color:'black'}}   onClick={()=>HandleNavigation("/music")}>PlayList</Button>

        </div>

        <Avatar >EF</Avatar>
      </Toolbar>
    </AppBar>
    <br/>
    <br/>

    </div>
  );
};

export default NavBar;
