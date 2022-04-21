import React from 'react';
import Grid from '@mui/material/Grid';
import Boximg from './Boximg';
import MyProduct1 from './MyProduct1';
import CloseIcon from '@mui/icons-material/Close';

// import { Container } from './styles';

function MyProduct() {
    return <div style={{ marginLeft: '200px' }}>
        <h1>Shipping Now</h1>
        <i>These items will separetely within 1-2 days</i>
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Boximg />
            </Grid>
            <Grid item xs={4}>
                <MyProduct1 />
            </Grid>
            <Grid item xs={1}>
            <CloseIcon/>
            </Grid>
        </Grid>
    </div>
}

export default MyProduct;