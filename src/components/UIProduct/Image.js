import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid } from '@mui/material';

export default function ImgMediaCard(props) {
    return (
        <>
            <Card sx={{
                maxWidth: 345, overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                height: 400
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={props.img}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant="body2" component="div" sx={{ fontStyle: 'inherit', fontFamily: 'monospace', color: 'blueviolet' }}>
                            Size: {props.size}
                        </Typography>
                        {/* <Typography gutterBottom variant="body2" component="div"  sx={{fontStyle:'inherit',fontFamily:'monospace',color:'blueviolet'}}>
                    Width: {props.width}
                </Typography> */}
                        <Typography gutterBottom variant="body2" component="div" sx={{ fontStyle: 'inherit', fontFamily: 'monospace', color: 'blueviolet' }}>
                            Price: {props.price}
                        </Typography>
                    </Grid>
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.use}
                    </Typography>
                </CardContent>
            </Card></>

    );
}
