import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from '../UIProduct/DataImg.json'
import { color, fontSize, margin, width } from '@mui/system';
import BasicSelect from './Select';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import DiscreteSliderLabel from './Slider';
import { red } from '@mui/material/colors';
import UnderlineLink from './Link';


export default function CardPage() {
    return (
        <div style={{ marginLeft: '200px', marginTop: '50px' }} >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {data.map((item) => (
                        <Card sx={{ maxWidth: 750, height: 300 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        image={item.image}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Color: {item.color}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Size: {item.Size}
                                        </Typography>
                                    </CardContent>
                                    <br />
                                    <div style={{ width: '3px' }} >
                                        <BasicSelect />
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Price:{item.Price}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <CloseIcon />
                                            <FavoriteBorderIcon />
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <br />
                        </Card>
                    ))
                    }
                    <br />
                    <Stack direction="row" spacing={2} >
                        <ButtonGroup disableElevation variant="contained">
                            <Button
                                variant="contained" sx={{ width: 350, height: 50 }}
                            >Check out</Button>
                            <div style={{ fontSize: '20px', height: '30px' }} >
                                <h5> Or </h5>
                            </div>
                            <Button
                                variant="contained"
                                sx={{ width: 350, height: 50, backgroundColor: "ActiveBorder", border: 'black' }}
                                startIcon={<Avatar src={'https://banner2.cleanpng.com/20190313/wce/kisspng-logo-paypal-x-com-image-brand-5c89a1fc9d8cd6.5075888315525237726453.jpg'} />}
                            >
                                Paypal
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <h3>$30 from 1-2 day shipping</h3>
                        <DiscreteSliderLabel />
                        <CardContent>
                            <Grid container spacing={30}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Subtotal
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        35$
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={30}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        Discount(10%)
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        -2$
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid container spacing={30}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        Estimated total
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        33$
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained" sx={{ width: 350, height: 50 }}
                            >Check out</Button>
                        </CardActions>
                        <div style={{ textAlign: 'center' }}>
                            <CardActions >
                                <UnderlineLink />
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
            </Grid>

        </div >
    );
}