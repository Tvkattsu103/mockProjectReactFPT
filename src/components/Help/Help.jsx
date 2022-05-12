import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import Footer from '../UI/Footer';
import Header from '../UI/Header';

function Help() {
  const [question,setQuestion] = useState("");
  const [contact,setContact] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleQuestion = (e) =>{
    setQuestion(e.target.value);
  };
  const handleContact = (e) =>{
    setContact(e.target.value);
  };
  const checkValid = () =>{
    let flag = false;
    if(question==""||contact==""){
      flag=false;
      setMessage("Thiếu thông tin!");
      setOpen(true);
    }
    if(!question==""&&!contact==""){
      flag=true;
    }
    console.log(!question=="");
    console.log(!contact=="");
    return flag;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
};
  const handleAddHelpContact =(e)=>{
    console.log(question);
    console.log(contact);
    if(checkValid()){
      axios.post('http://localhost:1337/api/help-contacts', {data : {'question':question,'phone':contact}})
      .then(response=>{
        console.log(response);
        setMessage("Đã gởi báo cáo!")
        setOpen(true);
      })
      .catch(error=>{
        console.log(error);
        setMessage("Không gởi được báo cáo!")
        setOpen(true);
      })
      setQuestion("");
      setContact("");
    }
  };
  return (
    <div>
        <Header/>
        <Box sx={{backgroundColor:'#4F6367'}}>
            <Container maxWidth="xs" align="center" style={{padding:'50px',color:'white'}}>
                        <Typography variant='h4'>How can we help ?</Typography>
                        <br></br>
                        <Typography variant='b1'>Sent us a text: 1-814-251-9966</Typography><br></br>
                        <Typography variant='b1'>Give us a call: 1-888-963-8944</Typography><br></br>
                        <Typography variant='b1'>Monday - Friday 6am - 5pm PST</Typography><br></br>
                        <Typography variant='b1'>Saturday - Sunday 6am - 4pm PST</Typography><br></br>
            </Container>
        </Box>
        <Box sx={{padding:'20px'}}>  
            <Typography variant='h5' align='center' padding='20px' fontFamily='monospace'>You can leave information here. We will response to you soon.<br></br> Thanh you!</Typography>
            <Container style={{padding:'20px',border:'2px solid black',borderRadius:'10px'}} maxWidth="sm" align="center">
                <TextField value={question} placeholder='What can we help you?' fullWidth style={{marginTop:'20px'}} required onChange={handleQuestion}></TextField>
                <TextField value={contact} placeholder='Your phone' fullWidth style={{marginTop:'20px'}} required onChange={handleContact}></TextField>
                <Button style={{height:'50px',border:'1px solid white',backgroundColor:'black',color:'white',marginTop:'20px'}} 
                fullWidth
                onClick={handleAddHelpContact}
                >
                            <p style={{fontWeight:'bold'}}>Send</p>
                </Button>
            </Container>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
        </Snackbar>
        <Footer></Footer>
    </div>
  )
}
export default Help;
