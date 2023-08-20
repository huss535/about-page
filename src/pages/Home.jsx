import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import kenobi from '../assets/images/kenobi.gif';

const Home = () => {
    
      
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Welcome to my own personal website. You can navigate the top menu to know more about me.</h1>
      </div>

      <div>
        <img src={kenobi} style={{ borderTopRightRadius: 50, borderBottomLeftRadius: 50, border: 'solid', width: 600 }} alt="WelcomeGif" />
      </div>
    </div>
  );
}; 

export default Home;
