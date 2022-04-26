import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent(props) {
    return (
        <Box component="span" sx={{ p: 1, border: '1px solid grey',borderRadius: '50%' }}>
            <Button>{props.num}</Button>
        </Box>
    );
}