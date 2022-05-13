import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import useFetchData from "../../customHooks/useFetchData";
import { useDispatch } from "react-redux";

export default function MonthBest() {
  const dispatch = useDispatch();
  const bests = useFetchData(
    "http://localhost:1337/api/products?populate=*&pagination[page]=1&pagination[pageSize]=5"
  );

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <h1>Best of this month!</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {bests &&
            bests.map((p) => (
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
