import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import kenobi from '../assets/images/kenobi.gif';
import { Typography } from '@mui/material';
const Home = () => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "100%", maxWidth: '80vw' }}>



      <div>
        <img src={kenobi} style={{ borderTopRightRadius: 50, borderBottomLeftRadius: 50, borderStyle: 'solid', borderWidth: 10, borderColor: '#E7473C', width: "75%" }} alt="WelcomeGif" />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>

        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Roboto, sans-serif' }}>
          Welcome to my own personal website. You can navigate the top menu to know more about me.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
