import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";


export default function ContainedButtons() {
    return (
        <div>
            <br />
            <Stack direction="row" spacing={2}>
                <Link to="/CardPage2">
                    <Button variant="contained">Add to cart</Button>
                </Link>
            </Stack>
        </div>
    );
}