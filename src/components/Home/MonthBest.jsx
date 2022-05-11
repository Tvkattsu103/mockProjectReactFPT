import * as React from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetchData from "../../customHooks/useFetchData";

export default function MonthBest() {
  const bests = useFetchData(
    "http://localhost:1337/api/products?populate=*&pagination[page]=1&pagination[pageSize]=5"
  );

  const handleAddToCart = (id) => {

    console.log(id);

    axios
      .post("http://localhost:1337/api/carts", {
        data: {quantity: 1, size: 38, products: id}
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={
                      "http://localhost:1337" +
                      p.attributes.Image.data[0].attributes.url
                    }
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
                    <Button size="small" onClick={() => handleAddToCart(p.id)}>
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
