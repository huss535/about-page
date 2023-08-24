import React, { useState } from 'react';
import {  Typography, Box,MobileStepper,Button, Card, CardMedia } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import kane from '../assets/images/Citizen_Kane_poster,_1941_(Style_B,_unrestored).jpg';
import shaun from '../assets/images/shaun.jpeg';
import goodwill from '../assets/images/goodwill.jpeg';
import '../App.css';
import { useTheme } from '@emotion/react';
import SlideShow from '../components/SlideShow';

const movieData = [
  { imgSrc: kane, alt:'Citizen Kane image' , title: 'Citizen Kane' },
  { imgSrc: shaun, alt:'Shaun of the Dead image' , title: 'Shaun of the Dead' },
  { imgSrc: goodwill, alt:'Good Will Hunting image' ,title: 'Good Will Hunting' },
];

const Movies = () => {
return(
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{margin:'50px'}}>
<SlideShow dataArray={movieData}/>
</div>
<div>
<Typography variant="h3" gutterBottom style={{ fontFamily: 'Roboto, sans-serif', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
Planning a movie night ?
      </Typography>


</div>
</div>

);

};
  
  export default Movies;