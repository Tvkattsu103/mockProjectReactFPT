import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import PaidIcon from '@mui/icons-material/Paid';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

import data from './Data.json'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Typography sx={{ fontSize: 50, }} color="text.secondary" gutterBottom>
                        INSIDER
                    </Typography>
                    <Typography>
                        0 points
                    </Typography>
                    <Typography>
                        Spend $350 to reach VIB status
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <PaidIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>
                                    Beauty Insider Cash: Get $10 off for every 500 points your earn
                                </Typography>
                            </Grid>
                        </Grid>
                    </Item>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <StorefrontIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>
                                    Beauty Insider Cash: Get $10 off for every 500 points your earn
                                </Typography>
                            </Grid>
                        </Grid>
                    </Item>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <DirectionsCarFilledIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>
                                    Beauty Insider Cash: Get $10 off for every 500 points your earn
                                </Typography>
                            </Grid>
                        </Grid>
                    </Item>

                </Grid>
            </Grid>
        </Box>
    );
}
