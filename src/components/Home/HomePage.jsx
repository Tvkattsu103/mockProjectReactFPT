import Box from "@mui/material/Box";
import { Button, ButtonGroup, Grid } from "@mui/material";
import * as React from "react";
import Header from "../UI/Header";
import Carousel from "./Carousel";
import Newest from "./Newest";
import MonthBest from "./MonthBest";
import EmailSignUp from "../EmailSignUp/EmailSignUp";
import { Link } from "react-router-dom";
import useFetchData from "../../customHooks/useFetchData";
import { useNavigate } from 'react-router-dom'
import Footer from "../UI/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const categories = useFetchData("http://localhost:1337/api/categories");

  const handleCategoryClick = (e) => {
    // console.log(e.target.textcontent);
    navigate("/categoryoverview")
  }

  return (
    <>
      <Header></Header>
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
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <Carousel></Carousel>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <Newest></Newest>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <MonthBest></MonthBest>
          </Box>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
