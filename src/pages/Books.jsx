import React, { useState } from 'react';
import '../App.css';
import SlideShow from '../components/SlideShow';
import gold from '../assets/images/gold.jpeg'
import hitch from '../assets/images/hitch.jpeg'
import tale from '../assets/images/tale.jpeg'
import { Typography } from '@mui/material';
const bookData = [

    { imgSrc: gold, alt:'Goldfinch image' , title: 'The Goldfinch' },
    { imgSrc: hitch, alt:"Hitchhiker's Guide image", title: "Hitchhiker's Guide to the Galaxy" },
    { imgSrc: tale, alt:'Tale of two cities image' ,title: 'A Tale of Two Cities' },

]
const Books = ()=>{
return(

    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div  style={{margin:'50px'}} >
            <SlideShow dataArray={bookData}/>
        </div>

        <div>
        <Typography variant="h3" gutterBottom style={{ fontFamily: 'Roboto, sans-serif', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
        Here are some good reads !
      </Typography>
            
        </div>
    </div>



);
};
export default Books;