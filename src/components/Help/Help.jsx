import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Footer from '../UI/Footer';
import Header from '../UI/Header';

function Help() {
  const [question,setQuestion] = useState("");
  const [contact,setContact] = useState("");
  const handleQuestion = (e) =>{
    setQuestion(e.target.value);
  };
  const handleContact = (e) =>{
    setContact(e.target.value);
  };
  return (
    <div>
        <Header/>
        <Box sx={{backgroundColor:'silver'}}>
            <Container maxWidth="xs" align="center" style={{padding:'50px',color:'black'}}>
                        <Typography variant='h4'>How can we help ?</Typography>
                        <br></br>
                        <Typography variant='b1'>Sent us a text: 1-814-251-9966</Typography><br></br>
                        <Typography variant='b1'>Give us a call: 1-888-963-8944</Typography><br></br>
                        <Typography variant='b1'>Monday - Friday 6am - 5pm PST</Typography><br></br>
                        <Typography variant='b1'>Saturday - Sunday 6am - 4pm PST</Typography><br></br>
            </Container>
        </Box>
        <Box>  
            <Typography variant='h5' align='center' padding='20px' fontFamily='monospace'>You can leave information here. We will response to you soon.<br></br> Thanh you!</Typography>
            <Container style={{padding:'20px',border:'2px solid black',borderRadius:'10px'}} maxWidth="sm" align="center">
                <TextField value={question} placeholder='What can we help you?' fullWidth style={{marginTop:'20px'}} required onChange={handleQuestion}></TextField>
                <TextField value={contact} placeholder='Your phone' fullWidth style={{marginTop:'20px'}} required onChange={handleContact}></TextField>
                <Button style={{height:'50px',border:'1px solid white',backgroundColor:'black',color:'white',marginTop:'20px'}} fullWidth>
                            <p style={{fontWeight:'bold'}}>Send</p>
                </Button>
            </Container>
        </Box>
        <Footer></Footer>
    </div>
  )
}
export default Help;
