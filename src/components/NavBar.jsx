import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Avatar } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import "../index.css"
import CustomButton from './CustomButton';

const NavBar = () => {

  const buttonStyle = {

    fontFamily: 'Roboto, sans-serif',marginInline:40,color:'black'
  }
  
  const navigate = useNavigate();


  const HandleNavigation = (navRoute) =>{
    navigate(navRoute);
  };
  return (
    <div style={{marginBottom:100,}}>
    <AppBar position="fixed" sx={{ backgroundColor: '#E7473C', top: 0, left: 0, right: 0 }}>
      <Toolbar style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between' }}>
      
      <div>
        <CustomButton style={{margin:0,marginInline:30}}   onClick={() => HandleNavigation("/")}>Home</CustomButton>
        <CustomButton  style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/aboutMe")} >About me</CustomButton>
        <CustomButton  style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/skills")} >Skills</CustomButton>
        <CustomButton   style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/movies")}>Movies</CustomButton>
        <CustomButton   style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/books")}>Books</CustomButton>
        <CustomButton    style={{margin:0,marginInline:30}} onClick={()=>HandleNavigation("/music")}>PlayList</CustomButton>
        

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
