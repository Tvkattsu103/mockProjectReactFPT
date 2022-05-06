import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Container, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { border, flexbox, margin } from '@mui/system';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../UI/Header';
import RadioLabel from './RadioLabel';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

function Shipping() {
    const data = useSelector((state) => state.cartpage.dataShipping)
    const [valueRadio,setValueRadio] = useState(5);
    const handleChangeRadio = (e) => {
        setValueRadio(e.target.value);
    };
    return (
        <div>
            <Header />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid container item xs={12} sx={{ minHeight: 100 }}>
                        <Grid item xs={7}>
                            <Typography sx={{ mb: 1.5 }} align="center">
                                <h1>CHECK OUT</h1>
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{ mb: 1.5 }} align="center">
                                <p><b>Help available 7am-1am EST 877-775-9348</b></p>
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid container item xs={7} spacing={2}>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <b>Email Address</b>
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        thehuy.2pro@gmail.com
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>

                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <b>Shipping Method</b>
                                    </Typography>
                                    <hr></hr>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={valueRadio}
                                        onChange={handleChangeRadio}  
                                    >
                                        <FormControlLabel value="5" sx={{ display: 'block', paddingLeft: '20px' }} control={<Radio />} label={<RadioLabel day="Thursday, Jul 29" time="Standard 3-5 business days" money="$5" />}/>

                                        <FormControlLabel value="17" sx={{ display: 'block', paddingLeft: '20px' }} control={<Radio />} label={<RadioLabel day="Tuesday, Jul 27" time="Express 2-3 business days" money="$17" />} />

                                        <FormControlLabel value="22" sx={{ display: 'block', paddingLeft: '20px' }} control={<Radio />} label={<RadioLabel day="Friday, Jul 23" time="Priority 1 business day" money="$22" />} />
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>

                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                <b>Shipping Address</b>
                                            </Grid>
                                            <Grid item xs={4} align="right">
                                                <a href='# '
                                                    style={{
                                                        border: '2px solid black',
                                                        color: 'black',
                                                        padding: '5px',
                                                        textDecoration: 'none'
                                                    }}
                                                >ADD NEW</a>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar
                                            sx={{ height: '100px', width: '100px' }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            CC
                                        </Avatar>
                                        <Avatar
                                            sx={{ height: '100px', width: '100px' }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            CC
                                        </Avatar>

                                    </AvatarGroup>
                                    <Paper variant="outlined" sx={{ padding: '20px' }}>
                                        Ship to a <p style={{ color: 'blue', display: 'inline' }}>UPS access point</p><br></br>
                                        Secure-no need to watch for delivery at home<br></br>
                                        Flexible - pickup on your schedule
                                    </Paper>
                                    <FormControlLabel control={<Checkbox />} label="This is a gift" />

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <Grid container>
                                            <Grid item xs={7}>
                                                <b>Payment Method</b>
                                            </Grid>
                                            <Grid item xs={5} align="right">
                                                <a href='# '
                                                    style={{
                                                        border: '2px solid black',
                                                        color: 'black',
                                                        padding: '5px',
                                                        textDecoration: 'none'
                                                    }}
                                                >ADD NEW CARD</a>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar
                                            sx={{ height: '100px', width: '100px' }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            CC
                                        </Avatar>
                                        <Avatar
                                            sx={{ height: '100px', width: '100px' }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            CC
                                        </Avatar>
                                    </AvatarGroup>

                                    <Link to="">
                                        <Grid container style={{ border: '1px solid black', padding: '5px' }}>
                                            <Grid item xs={11}>
                                                ADD GIFT CARD
                                            </Grid>
                                            <Grid container xs={1}>
                                                <AddIcon></AddIcon>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                    <hr></hr>
                                    <p>PayPal & Alterpay: <p style={{ color: 'blue', display: 'inline' }}>Limits apply</p> to Gap Inc. Credit Card Reward</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <b>MY POINTS & REWARDS</b>
                                    </Typography>
                                    <Link to="">
                                        <Grid container style={{ border: '1px solid black', padding: '5px' }}>
                                            <Grid item xs={11}>
                                                ADD CODE
                                            </Grid>
                                            <Grid container xs={1}>
                                                <AddIcon></AddIcon>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                    <p>Applied rewards cannot the total of your order minus tam and shopping. Limits apply.</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <b>Shopping Bag (2items)</b>
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="230"
                                    image={data.type}
                                >

                                </CardMedia>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container item xs={5} >

                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <b>Order Summary</b>
                                        <hr></hr>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        <Grid container>
                                            <Grid item xs={10}>
                                                Sub Total:
                                            </Grid>
                                            <Grid item xs={2} align="right">
                                                {data.price}
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        <Grid container>
                                            <Grid item xs={10}>
                                                Shipping:
                                            </Grid>
                                            <Grid item xs={2} align="right">
                                                $ {valueRadio}
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        <Grid container>
                                            <Grid item xs={10}>
                                                My saving:
                                            </Grid>
                                            <Grid item xs={2} align="right">
                                                0
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        <Grid container>
                                            <Grid item xs={10}>
                                                Est. Tax:
                                            </Grid>
                                            <Grid item xs={2} align="right">
                                                0
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                        <hr></hr>
                                        <Grid container>
                                            <Grid item xs={10}>
                                                <b>Total</b>
                                            </Grid>
                                            <Grid item xs={2} align="right">
                                                {parseInt(data.price) - valueRadio}
                                            </Grid>
                                            {console.log(data.price)}
                                        </Grid>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Shipping;
