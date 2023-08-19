import React, { useState } from 'react';
import {  Typography, Box,MobileStepper,Button, Card, CardMedia } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import kane from '../assets/images/Citizen_Kane_poster,_1941_(Style_B,_unrestored).jpg';
import shaun from '../assets/images/shaun.jpeg';
import goodwill from '../assets/images/goodwill.jpeg';
import '../App.css';
import { useTheme } from '@emotion/react';


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
      <>
        
        <Box>
          <Card sx={{ position: 'relative', height: 700, width: 500 }}>
            <CardMedia
              component="img"
              src={dataArray[activeStep].imgSrc}
              alt={dataArray[activeStep].alt}
              sx={{
                objectFit: 'cover', // This will resize the image to cover the entire card
                width: '100%',
                height: 'auto', // Adjust this value as needed to control image height
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#000',
                color: 'white',
                padding: '8px',
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
              {dataArray[activeStep].title}
            </Typography>
          </Card>
  
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}

            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Box>
      </>
    );


};
export default SlideShow;