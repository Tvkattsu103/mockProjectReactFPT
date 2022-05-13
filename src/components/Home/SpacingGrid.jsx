import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetchData from "../../customHooks/useFetchData";

export default function SpacingGrid() {

  const newest = useFetchData("http://localhost:1337/api/products?populate=*&sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3");

  console.log(newest);
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
              <ProductCard
                  id={p.id}
                  title={p.attributes.title}
                  image={
                    "http://localhost:1337" +
                    p.attributes.image.data[0].attributes.url
                  }
                  price={p.attributes.price}
                  maxWidth={250}
                />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
