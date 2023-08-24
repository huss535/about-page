import React, { useState } from 'react';
import {  Typography, Box,MobileStepper,Button, Card, CardMedia, Paper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import kane from '../assets/images/Citizen_Kane_poster,_1941_(Style_B,_unrestored).jpg';
import shaun from '../assets/images/shaun.jpeg';
import goodwill from '../assets/images/goodwill.jpeg';
import '../App.css';
import { useTheme } from '@emotion/react';
import CustomButton from './CustomButton';


const SlideShow = ({dataArray})=>{

    const maxSteps = dataArray.length;
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    };
  
    const handleBack = () => {
      setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
    };
  
    return (
      
      <div>
  <Card sx={{position: 'relative', height: 700, width: 500, borderRadius: 8 ,border:'solid',borderWidth:10,borderColor:'#E7473C'}}>
    <CardMedia
      component="img"
      src={dataArray[activeStep].imgSrc}
      alt={dataArray[activeStep].alt}
      sx={{
        objectFit: 'fit',
        width: '100%',
        height: 'auto',
         borderColor:'#E7473C',
      }}
    />
  </Card>

  <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
  <CustomButton style={{paddingInline:15}} onClick={handleBack}>
    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    Back
  </CustomButton>

  <Typography variant="body1" gutterBottom style={{ fontFamily: 'Roboto, sans-serif'}}>
  {dataArray[activeStep].title}
      </Typography>
    

  <CustomButton style={{paddingInline:15}} onClick={handleNext}>
    Next
    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
  </CustomButton>
</div>



      </div>
    );


};
export default SlideShow;