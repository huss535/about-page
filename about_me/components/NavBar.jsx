import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor:"transparent"}} >
        <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Movies</Button>
        <Button color="inherit">Books</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
