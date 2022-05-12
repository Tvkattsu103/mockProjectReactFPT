import * as React from "react";
import Grid from "@mui/material/Grid";
import useFetchData from "../../customHooks/useFetchData";
import ProductCard from "./ProductCard";

export default function Newest() {
  const newest = useFetchData(
    "http://localhost:1337/api/products?populate=*&sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3"
  );

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
                  maxWidth={350}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
