import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,CircularProgress,Paper,Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import axios from "axios";
import { styled } from '@mui/system';
import CustomButton from "../components/CustomButton";


const AboutMe = () => {
 
  const [dialogState, setDialogState] = useState(false);
  const [loading,setLoading] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const style = { fontFamily: 'Roboto, sans-serif', margin:40 };
  const handleOpen = () => {
    fetchName();
  };

  const handleClose = () => {
    setDialogState(false);
  };

  const fetchName = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://lvu2zcor4l.execute-api.us-east-1.amazonaws.com/getCharacter");
      setCharacterName(response.data.name);
      setLoading(false);
      setDialogState(true);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <div>
     <Paper
      elevation={14}
      sx={{
        padding: (theme) => theme.spacing(3),
        maxWidth: 800,
        margin: '0 auto',
        marginTop: (theme) => theme.spacing(5),
        backgroundColor: '#E7473C',
        borderRadius: '8px',
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      <Typography variant="h5" gutterBottom style={style}>
        Hey there, I'm your friendly neighbourhood computer science student in year three at the University of Auckland.
      </Typography>
      <Typography variant="h5" gutterBottom style={style}>
        When I'm not cracking code, you'll find me immersed in books, jotting down words, or painting my thoughts onto canvas. 📚🎨
      </Typography>
      <Typography variant="h5" gutterBottom style={style}>
      I'm all about the music vibes, movies have a sweet spot in my heart too! 🎶🎬
      </Typography>
      <Typography variant="h5" gutterBottom style={style}>
      Oh, and guess what? I'm a massive Star Wars and comic book enthusiast! May the force be with you. 🖖  </Typography>
      <Typography variant="h5" gutterBottom style={style}>
      Want to meet someone from a galaxy far far away ? Click the button below.
      </Typography>
    </Paper>
    <CustomButton
  
  onClick={handleOpen}
>
  Let the force guide me
</CustomButton>

      <Backdrop  open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      
      <Dialog open={dialogState} onClose={handleClose}>
        <DialogTitle style={{borderBottom:"solid"}}>{"You are"}</DialogTitle>
        <DialogContent dividers>
          
          <DialogContentText>{characterName}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton
            style={{margin:20}}
            onClick={handleClose}
          >
            Accept my fate
          </CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AboutMe;
