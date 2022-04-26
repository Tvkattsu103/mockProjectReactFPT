import { Grid, Radio } from '@mui/material';
import React from 'react'

function RadioLabel(props) {

    return (
        <div>
            <Grid container>
                <Grid item xs={10}>
                    <p><b>{props.day}</b></p>
                    <p>{props.time}</p>
                </Grid>
                <Grid item xs={2} align="right">
                    <p>{props.money}</p>
                </Grid>
                
            </Grid>
            <hr></hr>           
        </div>
    )
}
export default RadioLabel;
