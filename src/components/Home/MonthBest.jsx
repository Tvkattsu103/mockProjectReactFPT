import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function MonthBest() {
  const bests = [
    {
      id: 1,
      name: "name1",
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
      type: "MEN'S",
      description: "abcabc",
    },
    {
      id: 2,
      name: "name2",
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
      type: "WOMEN'S",
      description: "abcabc",
    },
    {
      id: 3,
      name: "name3",
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
      type: "BABY'S",
      description: "abcabc",
    },
    {
      id: 4,
      name: "name4",
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
      type: "MOM'S",
      description: "abcabc",
    },
    {
      id: 5,
      name: "name5",
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
      type: "TEEN'S",
      description: "abcabc",
    },
  ];

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <h1>Best of this month!</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {bests.map((p, index) => (
            <Grid key={p.id} item>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={p.image}
                  alt={p.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"><AddShoppingCartIcon /></Button>
                  <Button size="small">Buy now</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
