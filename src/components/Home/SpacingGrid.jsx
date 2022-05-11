import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetchData from "../../customHooks/useFetchData";

export default function SpacingGrid() {

  const newest = useFetchData("http://localhost:1337/api/products?populate=*&sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3");

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={5}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
        <h1>Newest!</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {newest && 
            newest.map((p) => (
            <Grid key={p.id} item>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                    component="img"
                    height="400"
                    image={"http://localhost:1337"+p.attributes.Image.data[0].attributes.url}
                    alt={p.attributes.Title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.attributes.Title}
                    </Typography>
                    {/* <Typography variant="h6" color="text.secondary">
                      {p.category}
                    </Typography> */}
                    <Typography variant="h5" color="text.secondary">
                      ${p.attributes.Price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <AddShoppingCartIcon />
                    </Button>
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
