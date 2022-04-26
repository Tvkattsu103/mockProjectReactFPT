import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ResponsiveGridMyProfile from "./MyGrid";


const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function Content2() {
    return (
        <Card sx={{ height: 300 }}>
            <CardContent sx={{ textAlign: "center" }} >
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    Beaty Insider Cash
                    <HelpOutlineIcon />
                </Typography>
                <Typography>
                    Once you earn 500 points, you can apply them to purchace for $10 off.
                </Typography>
                <Typography>
                    Your Beauty Insider Cash will appear here.
                </Typography>
                <CardContent sx={{ textAlign: "center" }}>
                    <div style={{marginLeft: '800px'}}> 
                    <ResponsiveGridMyProfile />
                    </div>
                </CardContent>
            </CardContent>
        </Card>
    );
}
