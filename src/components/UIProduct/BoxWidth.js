import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BoxWidth(props) {
    return (
        <div>
            <h3>Chọn width</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={4} md={4}>
                        <Button onClick={(Width) => props.getDataWidth('Medium') }>
                            <Item>Medium</Item>
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Button onClick={(Width) => props.getDataWidth('Wide') }>
                            <Item>Wide</Item>
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Button onClick={(Width) => props.getDataWidth('Norrow') }>
                            <Item>Norrow</Item>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
