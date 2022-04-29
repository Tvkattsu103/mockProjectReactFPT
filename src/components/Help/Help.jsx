import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Header from '../UI/Header';

function Help() {
  return (
    <div>
        <Header/>
        <Box sx={{backgroundColor:'silver'}}>
            <Container maxWidth="xs" align="center" style={{paddingTop:'50px',color:'white'}}>
                        <Typography variant='h4'>How can we help ?</Typography>
                        <br></br>
                        <Typography variant='b1'>Sent us a text: 1-814-251-9966</Typography><br></br>
                        <Typography variant='b1'>Give us a call: 1-888-963-8944</Typography><br></br>
                        <Typography variant='b1'>Monday - Friday 6am - 5pm PST</Typography><br></br>
                        <Typography variant='b1'>Saturday - Sunday 6am - 4pm PST</Typography><br></br>
                        <Button style={{width:'300px',height:'50px',border:'1px solid white',backgroundColor:'white',color:'black',margin:'10px'}}>
                            <p style={{fontWeight:'bold'}}>GET IN TOUCH</p>
                        </Button>
            </Container>
        </Box>
    </div>
  )
}
export default Help;
