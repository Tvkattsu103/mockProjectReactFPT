import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponentMyProfile(props) {
    return (
        <Box component="span" sx={{ p: 1, border: '3px solid grey',borderRadius: '50%', textAlign: 'center'}}>
            <Button>Shop to Earn Points</Button>
        </Box>
    );
}