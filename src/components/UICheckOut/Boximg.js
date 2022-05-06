import * as React from 'react';
import Box from '@mui/material/Box';

export default function Boximg() {
    return (
        <Box
            component="img"
            src="https://cdn.hoang-phuc.com/media/catalog/product/cache/3243173bfa4021eba79889ede7b15407/3/3/33191kw-a0a-1.jpg"
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
    );
}