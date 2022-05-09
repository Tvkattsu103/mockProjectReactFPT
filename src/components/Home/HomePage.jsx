import Box from "@mui/material/Box";
import { Button, ButtonGroup, Grid } from "@mui/material";
import * as React from "react";
import Header from "../UI/Header";
import { Popper, Typography } from "@mui/material";
import Carousel from "./Carousel";
import SpacingGrid from "./SpacingGrid";
import MonthBest from "./MonthBest";
import EmailSignUp from "../EmailSignUp/EmailSignUp";
import { Link } from "react-router-dom";
import useFetchData from "../../customHooks/useFetchData";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemHover, setItemHover] = React.useState(null);

  const categories = useFetchData("http://localhost:1337/api/categories");

  console.log(categories);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setItemHover(event.currentTarget.textContent);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Header></Header>
      <EmailSignUp />
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              size="large"
            >
              {
                categories &&
              categories.map((ca) => {
                return (
                  <Box
                    key={ca.id}
                    aria-owns={open ? "mouse-over-poper" : undefined}
                    aria-haspopup="true"
                    //onMouseOver={handlePopoverOpen}
                    //onMouseLeave={handlePopoverClose}
                  >
                    <Button >{ca.attributes.Name}</Button>
                  </Box>
                );
              })}
              {/* <Popper 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Box sx={{p: 3, backgroundColor: 'silver'}}>
                <Link to="/Search"><Typography>{itemHover} Category</Typography></Link>
                </Box>
              </Popper> */}
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <Carousel ></Carousel>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <SpacingGrid></SpacingGrid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <MonthBest></MonthBest>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
