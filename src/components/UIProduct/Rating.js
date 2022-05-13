import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
    return (
        <div>
            <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
            <h1>Ghost 14</h1>
            <p>Women's road-running shoes</p>
            <hr></hr>
            <h3>Chọn loại áo</h3>
        </div>
    );
}
