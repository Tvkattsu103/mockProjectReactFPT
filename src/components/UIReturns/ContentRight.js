import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import EditLocationIcon from '@mui/icons-material/EditLocation';
// import { Container } from './styles';

function ContentRight() {
    return <>
        <PhoneAndroidIcon sx={{ width: 100, height: 100 }} />
        <Typography variant="body1" gutterBottom component="div">
            PRODUCTS & ORDERS
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            1-800-806-6453
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            4 am - 11 pm PT
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            7 days a week
        </Typography>
        <ChatIcon sx={{ width: 100, height: 100 }}/>
        <Typography variant="body1" gutterBottom component="div">
            PRODUCTS & ORDERS
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            Chat with us
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            4 am - 11 pm PT
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            7 days a week
        </Typography>
        <EditLocationIcon  sx={{ width: 100, height: 100 }}/>
        <Typography variant="body1" gutterBottom component="div">
            STORE LOCATOR
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
            Find Nike retail stores near you
        </Typography>
    </>;
}
export default ContentRight;