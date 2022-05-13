import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyBox from './MyBox';

export default function BasicGridReturn() {
    return (<>
        <Box >
            <Grid container>
                <MyBox />
            </Grid>
        </Box>
    </>
    );
}