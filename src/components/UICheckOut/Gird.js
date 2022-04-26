import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainConcept1 from './MainConcept1';
import MainConcept2 from './MainConcept2';
import MainConcept3 from './MainConcept3';

export default function BasicGrid() {
    return (
        <div style={{ marginLeft: '400px' }} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={20}>
                    <Grid item xs={2}>
                        <MainConcept1/>
                    </Grid>
                    <Grid item xs={2}>
                        <MainConcept2/>
                    </Grid>
                    <Grid item xs={8}>
                       <MainConcept3/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
