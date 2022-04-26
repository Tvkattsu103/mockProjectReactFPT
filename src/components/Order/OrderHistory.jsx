import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../UI/Header';

function OrderHistory() {
  return (
    <div>
        <Header/>
        <div style={{backgroundColor:'silver'}}>
            <Container maxWidth="sm">
                <Grid container style={{display:'flex',justifyContent:'space-between'}}>
                    <Grid>      
                        <p style={{fontSize:'20px'}}><b>Hello Christine!</b></p>
                        <p style={{textDecoration:'underline'}}>11 recent orders</p>
                    </Grid>
                    <Grid>
                        <p style={{backgroundColor:'blue',padding:'5px',borderRadius:'40px',color:'white'}}>$150</p>
                        <p>Reward</p>
                    </Grid>
                </Grid>
            </Container>
        </div>         
        <Grid Container>
            <Grid items xs={12}>
                <Container maxWidth="sm">
                    <h1>Order History</h1>
                    <p>Search items in your order history</p>
                </Container>
            </Grid>
            <Grid container items xs={12}>
                <Container maxWidth="sm" style={{border:'1px solid'}}>
                    <Grid container item xs={12} style={{display:'flex',justifyContent:'space-between'}}>
                        <Grid>
                            <p>Ordered on Jun 11th,2021</p>
                        </Grid>
                        <Grid>
                            <p>#15837F9</p> 
                        </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid container item xs={12} style={{display:'flex',justifyContent:'space-between'}}>
                        <Grid>
                            <Typography>     
                                <p style={{color:'green',display:'inline'}}><b>*SHIPPED</b></p>
                                <p style={{display:'inline'}}><b>- 2 items</b></p>
                            </Typography>
                            <Typography>
                                <p>Est. delivery by<p style={{color:'green',display:'inline'}}> Friday, Jun 25th</p></p>
                            </Typography>
                            <Box component={"img"} src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-yellow-handbag-beautiful-handbag-ladies-handbag-cartoon-handbag-png-image_3874921.jpg" height="150px" width="100px">
                            </Box>
                            <Box component={"img"} src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-yellow-handbag-beautiful-handbag-ladies-handbag-cartoon-handbag-png-image_3874921.jpg" height="150px" width="100px">
                            </Box>
                        </Grid>
                        <Grid>
                            <Link to="">Track Package</Link>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{display:'flex',justifyContent:'space-between'}}>
                        <Grid>
                            <Typography>     
                                <p style={{color:'green',display:'inline'}}><b>*SHIPPED</b></p>
                                <p style={{display:'inline'}}><b>- 1 items</b></p>
                            </Typography>
                            <Typography>
                                <p>Est. delivery by<p style={{color:'green',display:'inline'}}> Friday, Jun 25th</p></p>
                            </Typography>
                            <Box component={"img"} src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-yellow-handbag-beautiful-handbag-ladies-handbag-cartoon-handbag-png-image_3874921.jpg" height="150px" width="100px">
                            </Box>
                        </Grid>
                        <Grid>
                            <Link to="">Track Package</Link> 
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{display:'flex',justifyContent:'space-between'}}>
                        <Grid>
                        <Typography>     
                                <p style={{color:'green',display:'inline'}}><b>*SHIPPED</b></p>
                                <p style={{display:'inline'}}><b>- 1 items</b></p>
                            </Typography>
                            <Typography>
                                <p>Est. delivery by<p style={{color:'green',display:'inline'}}> Friday, Jun 25th</p></p>
                            </Typography>
                            <Box component={"img"} src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-yellow-handbag-beautiful-handbag-ladies-handbag-cartoon-handbag-png-image_3874921.jpg" height="150px" width="100px">
                            </Box>
                        </Grid>

                        <Grid>
                            <Link to="">Track Package</Link> 
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    </div>
  )
}
export default OrderHistory;
