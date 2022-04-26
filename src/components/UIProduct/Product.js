import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './Image';
import data from "./DataImg.json"
import HalfRating from './Rating';
import SpacingGrid from './ImageThuNho';
import BoxSize from './BoxSize';
import BoxWidth from './BoxWidth';
import ContainedButtons from './ContainedButtons';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Product() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={20}>
                <Grid item xs={1}>
                    {/* Content nam ben trai */}
                </Grid>
                <Grid item xs={6}>
                    {/* Content nam ben trai */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        {data.map((item) => (
                            <Grid item xs={6} key={item.id}>
                                <ImgMediaCard img={item.image} name={item.name} use={item.use} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid item xs={8}>
                        <HalfRating />
                    </Grid>
                    <Grid item xs={4}>
                        <SpacingGrid />
                    </Grid>
                    <Grid item xs={6}>
                        <BoxSize/>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <ContainedButtons/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
