import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Button.css'

export default function BasicButtonGroupReturn() {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button className='button'>Shop nike.com</Button>
            <Button className='button'>Find a Store</Button>
            <Button className='button'>Start a free member return</Button>
            <Button className='button'>Start a guest return</Button>
        </ButtonGroup>
    );
}