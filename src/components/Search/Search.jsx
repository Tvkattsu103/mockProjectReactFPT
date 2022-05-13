import {
  Container,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listProductSearchSelector } from "../../redux/selectors";
import useFetchData from "../../customHooks/useFetchData";
import listSlide from "../Search/listSlide";
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
      <Box sx={{minHeight:'100vh', mb:3}}>
        <Container maxWidth="" sx={{ marginTop: 3 }} >
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
      </Box>
      <Footer />
    </>
  );
};
export default Search;
