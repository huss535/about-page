import { TextField } from '@mui/material';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const FeedbackPage = ()=>{
    const [dialogState, setDialogState] = useState(false);
    const [errorDialog, setErrorDialog] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleErrorClose = () =>{
        setErrorDialog(false);
    };
      const handleClose = () => {
        setDialogState(false);
      };
    const handleChange = (e)=>{
        setFeedback(e.target.value);
        console.log(feedback);
    };
    const handleSubmit = (e)=>{

    e.preventDefault();
    const dataSent = {"message":feedback};
    axios.post('https://lvu2zcor4l.execute-api.us-east-1.amazonaws.com/feedback',dataSent,{
        headers: {
          'Content-Type': 'application/json', // Specify content type
        },
      }).then((response)=>{
        
        setDialogState(true);
        setFeedback("");
    
    
    
    }).catch((error)=>{console.log(error); setErrorDialog(true);});



    };

return (


<div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',width:"100%" }}>

<form  onSubmit={handleSubmit}>
<div style={{display:"flex",flexDirection:"column",gap:20}}>
<TextField required  label="Enter your feedback 😁" variant="outlined" size='large' multiline rows={4} onChange={handleChange} sx={{width:"400px"}}/>

<CustomButton type='submit' style={{backgroundColor:"#E7473C"}}>Submit</CustomButton>
</div>
</form>

<Dialog open={errorDialog} onClose={handleClose}>

<IconButton  style={{position:'absolute',top:0,left:0}} onClick={handleErrorClose}>
            <CloseIcon/>
          </IconButton>
          <br/>
        <DialogTitle style={{borderBottom:"solid"}}>
            
         {"Warning"}</DialogTitle>
        <DialogContent dividers>
          
          <DialogContentText>{"Response submission failed"}</DialogContentText>
        </DialogContent>
          
      </Dialog>

<Dialog open={dialogState} onClose={handleClose}>

<IconButton  style={{position:'absolute',top:0,left:0}} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          <br/>
        <DialogTitle style={{borderBottom:"solid"}}>
            
         {"Response submitted !"}</DialogTitle>
        <DialogContent dividers>
          
          <DialogContentText>{"Thank you for your response"}</DialogContentText>
        </DialogContent>
          
      </Dialog>

      </div>

);


};

export default FeedbackPage;