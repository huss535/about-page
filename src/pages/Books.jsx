import React, { useState } from 'react';
import '../App.css';
import SlideShow from '../components/SlideShow';
import gold from '../assets/images/gold.jpeg'
import hitch from '../assets/images/hitch.jpeg'
import tale from '../assets/images/tale.jpeg'
const bookData = [

    { imgSrc: gold, alt:'Goldfinch image' , title: 'The Goldfinch' },
    { imgSrc: hitch, alt:"Hitchhiker's Guide image", title: "Hitchhiker's Guide to the Galaxy" },
    { imgSrc: tale, alt:'Tale of two cities image' ,title: 'A Tale of Two Cities' },

]
const Books = ()=>{
return(

    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{margin:'50px'}}>
            <SlideShow dataArray={bookData}/>
        </div>

        <div>

            <h1>
            Here are some good reads !
            </h1>
        </div>
    </div>

);
};
export default Books;