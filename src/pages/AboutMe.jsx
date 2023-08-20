import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";

const AboutMe = () => {
  const [dialogState, setDialogState] = useState(false);
  const [characterName, setCharacterName] = useState("");

  const handleOpen = () => {
    fetchName();
  };

  const handleClose = () => {
    setDialogState(false);
  };

  const fetchName = async () => {
    try {
      const response = await axios.get("https://lvu2zcor4l.execute-api.us-east-1.amazonaws.com/getCharacter");
      setCharacterName(response.data.name);
      setDialogState(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>
        Hey there, I'm a computer science explorer in year three at the University of Auckland — your friendly
        neighborhood code-slinger! 🚀
      </h3>
      <h3>When I'm not cracking code, you'll find me immersed in books, jotting down words, or painting my thoughts onto canvas. 📚🎨</h3>
      <h3>From coding symphonies to jamming to my favorite tunes and turning movie nights into mini-adventures — I'm the ultimate tech geek and entertainment aficionado! 🎵🎬</h3>
      <h3>Oh, and did I mention? I'm a proud member of the Star Wars alliance and a comic book connoisseur. May the force be with you!</h3>

      <h3>And here is a lambda function that gives you your Star Wars character !</h3>

      <Button
        style={{ fontFamily: "Open Sans, sans-serif", marginInline: 40 }}
        variant="outlined"
        color="inherit"
        onClick={handleOpen}
      >
        Let the force guide me
      </Button>

      <Dialog open={dialogState} onClose={handleClose}>
        <DialogTitle style={{borderBottom:"solid"}}>{"You are"}</DialogTitle>
        <DialogContent dividers>
          
          <DialogContentText>{characterName}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontFamily: "Open Sans, sans-serif", marginInline: 40 }}
            variant="outlined"
            color="inherit"
            onClick={handleClose}
          >
            Accept my fate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AboutMe;
