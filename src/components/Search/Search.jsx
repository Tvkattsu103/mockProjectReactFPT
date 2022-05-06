import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../UI/Header";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import listProduct from "../../data/listProduct";
import {listProductSearchSelector} from '../../redux/selectors'
import useFetchData from "../../customHooks/useFetchData";
import listSlide from "../Search/listSlide";
import { Box } from "@mui/system";

const Search = () => {

  const dispatch = useDispatch();

  // const [list, setList] = useState(listProduct);
  const listProductAPI = useFetchData('https://fakestoreapi.com/products');
  if(listProductAPI)
  {
    console.log('ads');
    dispatch(listSlide.actions.changeList(listProductAPI));
  }

  const listProductSearch = useSelector(listProductSearchSelector);

  return (
    <>
      <Header></Header>
      <Container maxWidth="" sx={{marginTop: 3}}>
        <Grid container spacing={2}>
          {listProductSearch.map((p) => {
            return (
              <Grid item xs={3} key={p.id}>
                <Card sx={{height: 700}}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      ${p.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><AddShoppingCartIcon /></Button>
                    <Button size="small">Buy now</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default Search;
