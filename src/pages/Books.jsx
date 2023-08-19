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
return(<SlideShow dataArray={bookData}/>);
};
export default Books;