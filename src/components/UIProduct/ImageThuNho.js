import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BoxSx from './Box';
import data from './DataImg.json'

export default function SpacingGrid() {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={0}>
                    {data.map((value) => (
                        <Grid key={value} item>
                            <BoxSx
                            img = {value.image}
                                sx={{
                                    height: 50,
                                    width: 50,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
