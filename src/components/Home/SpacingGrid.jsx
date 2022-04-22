import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function SpacingGrid() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={5}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
        <h1>Newest!</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Spring Tops
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  New spring colors in modern
                  silhouettes. Organic cotton. $188.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"><AddShoppingCartIcon/></Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
