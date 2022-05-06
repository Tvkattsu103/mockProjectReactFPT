import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BoxComponentMyProfile from './Box';

export default function ResponsiveGridMyProfile() {
    return (
        <>
            <Box sx={{ flexGrow: 1 ,textAlign: 'center'}}>
                <Grid container spacing={{ xs: 4, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3} sm={3} md={3}>
                        <BoxComponentMyProfile />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
