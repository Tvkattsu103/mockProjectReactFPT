import * as React from 'react';
import Grid from '@mui/material/Grid';
import BoxSx from './Box';
import data from './DataType.json'
import { Button } from '@mui/material';

export default function SpacingGrid(props) {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={0}>
                    {data.map((value, key) => (
                        <Grid key={value.id} >
                            <Button onClick={(Type) => props.getDataType(value.Type)}>
                                <BoxSx
                                    img={value.Type}
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        border: "1px solid"
                                        
                                    }}
                                />
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
