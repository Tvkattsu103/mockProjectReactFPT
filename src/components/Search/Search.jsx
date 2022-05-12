import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { listProductSearchSelector } from "../../redux/selectors";
import useFetchData from "../../customHooks/useFetchData";
import listSlide from "../Search/listSlide";
import { Box } from "@mui/system";
import ProductCard from "../Home/ProductCard";

const Search = () => {
  const dispatch = useDispatch();

  const listProductAPI = useFetchData("http://localhost:1337/api/products?populate=*");

  useEffect(() => {
    if (listProductAPI) {
      dispatch(listSlide.actions.changeList(listProductAPI));
    }
  }, [listProductAPI]);

  const listProductSearch = useSelector(listProductSearchSelector);

  return (
    <>
      <Header></Header>
      <Container maxWidth="" sx={{ marginTop: 3 }}>
        <Grid container spacing={2}>
          {listProductSearch.map((p) => {
            return (
              <Grid item xs={3} key={p.id}>
                <ProductCard
                  id={p.id}
                  title={p.attributes.title}
                  image={
                    "http://localhost:1337" +
                    p.attributes.image.data[0].attributes.url
                  }
                  price={p.attributes.price}
                  // maxWidth={400}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};
export default Search;
