import * as React from 'react';
import Box from '@mui/material/Box';
import { Scale } from '@mui/icons-material';

export default function BoxSx(props) {
    return (
        <Box
            component="img"
            src={props.img}
            sx={{
                width: 50,
                height: 50,
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    transform: 'scale(1.5)'
                },
            }}
        />
    );
}