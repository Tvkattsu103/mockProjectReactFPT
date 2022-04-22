import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function Header() {
    return (
    <div style={{textAlign: 'center'}}>
        <Typography sx={{fontSize: 30, fontStyle:'inherit'}}>
            GET HELP
        </Typography>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </Box>
    </div>
    );
}