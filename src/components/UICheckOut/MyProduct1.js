import React from 'react';
import Grid from '@mui/material/Grid';

// import { Container } from './styles';

function MyProduct1() {
    return <div>
        <h3> The Box Cut Tee - White </h3>
        <p style={{ color: 'blue' }}> 1-hour delivery is availiable</p>
        <Grid container spacing={20}>
            <Grid item xs={4}>
                <h1>Size</h1>
                <p>Small</p>
            </Grid>
            <Grid item xs={4}>
                <h1>Quantity</h1>
                <p>1</p>
            </Grid>
            <Grid item xs={4}>
                <h1>Total</h1>
                <p>15</p>
            </Grid>
        </Grid>
    </div>
        ;
}

export default MyProduct1;