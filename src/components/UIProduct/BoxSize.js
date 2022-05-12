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
const data = [
    {
        "id": 1,
        "value": 50,
    },
    {
        "id": 2,
        "value": 51,
    },
    {
        "id": 3,
        "value": 52,
    },
    {
        "id": 4,
        "value": 53,
    },
    {
        "id": 5,
        "value": 54,
    },
    {
        "id": 6,
        "value": 55,
    },
    {
        "id": 7,
        "value": 56,
    },
    {
        "id": 8,
        "value": 57,
    },
    {
        "id": 9,
        "value": 58,
    },
    {
        "id": 10,
        "value": 59,
    },
    {
        "id": 11,
        "value": 60,
    },
];
export default function BoxSize(props) {
    const [hightlight, setHightlight] = React.useState(50)
    const handleClick = (Size) => {
        props.getDataSize(Size)
        setHightlight(Size)
    }
    return (
        <div>
            <h3>Chọn loại size</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    {data.map((value, key) => (
                        <Grid item xs={2} md={2} key={value.id}>
                            <Button
                                sx={hightlight === value.value ? {
                                    color: "red",
                                    background: "#4B7BE5",

                                } : {}}
                                onClick={
                                    () => handleClick(value.value)
                                }>
                                <Item
                                >{value.value}</Item>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
