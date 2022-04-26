import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BoxComponent from './Box';

const data = [
    {
        "num": 1
    },
    {
        "num": 2
    },
    {
        "num": 3
    },
    {
        "num": 4
    },
]

export default function ResponsiveGrid() {
    return (
        <div style={{ marginLeft: '200px', marginTop: '50px' }} >
            <h1 style={{ marginLeft: '650px' }}>EVERLANE</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 4, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((item) => (
                        <Grid item xs={3} sm={3} md={3}>
                            <BoxComponent num={item.num} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <p style={{ marginLeft: '500px', fontSize: '30px', fontFamily: 'revert' }}>Your order is ready to be placed</p>
            <hr style={{ marginRight: '200px' }}></hr>
        </div>
    );
}
