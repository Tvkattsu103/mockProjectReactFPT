import Box from "@mui/material/Box";
import { Button, ButtonGroup, Grid } from "@mui/material";
import * as React from "react";
import Header from "../UI/Header";
import { Popover, Typography } from "@mui/material";
import Carousel from "./Carousel";
import SpacingGrid from "./SpacingGrid";
import MonthBest from "./MonthBest";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemHover, setItemHover] = React.useState(null);

  const categories = [
    { id: 1, name: "NEW" },
    { id: 2, name: "WOMEN" },
    { id: 3, name: "MATERNITY" },
    { id: 4, name: "MEN" },
    { id: 5, name: "TEEN" },
    { id: 6, name: "GIRLS" },
    { id: 7, name: "BOY" },
    { id: 8, name: "TODDLER" },
    { id: 9, name: "BABY" },
    { id: 10, name: "MATCHING" },
    { id: 11, name: "JEANS" },
    { id: 12, name: "SALE" },
    { id: 13, name: "FACTORY" },
  ];

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
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Box sx={{ backgroundColor: "#81d4fa" }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              size="large"
            >
              {categories.map((ca) => {
                return (
                  <Box
                    key={ca.id}
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseOver={handlePopoverOpen}
                  >
                    <Button >{ca.name}</Button>
                  </Box>
                );
              })}
              <Popover
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
                onMouseOver={handlePopoverClose}
              >
                <Typography sx={{ p: 2 }} >{itemHover} use Popover.</Typography>
              </Popover>
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
