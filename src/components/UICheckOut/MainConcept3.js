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
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

// import { Container } from './styles';
function MainConcept3() {
    return <>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <h3>$30 from 1-2 day shipping</h3>
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
                    >Place Holder</Button>
                </CardActions>
                <div style={{ textAlign: 'center' }}>
                    <CardActions >
                    </CardActions>
                </div>
            </Card>
        </Grid>
    </>
}
export default MainConcept3;