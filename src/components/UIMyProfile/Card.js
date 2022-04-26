import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicGrid from "./Grid";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ marginLeft: 66, minWidth: 200, maxWidth: 800 }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    Your Beauty Insider Summary
                </Typography>
                <BasicGrid/>
            </CardContent>
        </Card>
    );
}
