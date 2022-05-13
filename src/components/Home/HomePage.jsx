import Box from "@mui/material/Box";
import { Button, ButtonGroup, Grid } from "@mui/material";
import * as React from "react";
import Header from "../UI/Header";
import Carousel from "./Carousel";
import Newest from "./Newest";
import MonthBest from "./MonthBest";
import EmailSignUp from "../EmailSignUp/EmailSignUp";
import useFetchData from "../../customHooks/useFetchData";
import { useNavigate } from 'react-router-dom'
import Footer from "../UI/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const categories = useFetchData("http://localhost:1337/api/categories");
  const handleCategoryClick = (e) => {
    navigate("/categoryoverview")
  }

  return (
    <>
      <Header />
      <EmailSignUp />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              size="large"
            >
              {categories &&
                categories.map((ca) => {
                  return <Button key={ca.id} onClick={handleCategoryClick}>{ca.attributes.name}</Button>;
                })}
            </ButtonGroup>
          </Box>
        </Grid>
        <Box sx={{ paddingBottom: '50px', backgroundColor: "#81d4fa" }}>
          <Grid item xs={12}>
            <Carousel />
          </Grid>
          <Grid item xs={12}>
            <Newest />
          </Grid>
          <Grid item xs={12}>
            <MonthBest />
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};
export default HomePage;
