import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Link, NavLink } from "react-router-dom";
import { checkUserSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";

const MenuLeft = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentuser'));
  // const nameAva = currentUser.name.split(" ");
  console.log(currentUser) 
  return (
    <>
      <Grid item xs={4}>
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Box component={"div"} sx={{ backgroundColor: "white", p: 2 }}>
              <Grid container>
                <Grid item xs={4}>
                  <Avatar sx={{ bgcolor: "#2d2d2d", height: 100, width: 100 }}>
                    {/* {nameAva.map((p) => p[0])} */}
                  </Avatar>
                </Grid>
                <Grid item xs={8} sx={{ pt: 3, pb: 3 }}>
                  <Typography>Hi,</Typography>
                  {/* <Typography variant="h5">{currentUser.name}</Typography> */}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <PersonOutlineIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Account overview</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <ShoppingCartCheckoutIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>My Orders</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <WorkspacePremiumIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Premier Delivery</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <AssignmentIndOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>My Details</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <LockOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Change password</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <NavLink
              to="/Address"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <Box sx={{ backgroundColor: "white", p: 1 }}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={3}>
                    <HouseOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>Address book</Typography>
                  </Grid>
                </Grid>
              </Box>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <NavLink
              to="/PaymentMethods"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <Box sx={{ backgroundColor: "white", p: 1 }}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={3}>
                    <CreditCardOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>Payment methods</Typography>
                  </Grid>
                </Grid>
              </Box>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <ChatOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Contact preferences</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <ConnectWithoutContactOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Social account</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <CardGiftcardOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Gift cards & vouchers</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <ErrorOutlineOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Need help?</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <FilterNoneOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>Where's my order?</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <FilterNoneOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>How do I make a return?</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white", p: 1 }}>
              <Grid container alignItems={"center"}>
                <Grid item xs={3}>
                  <FilterNoneOutlinedIcon fontSize="large" />
                </Grid>
                <Grid item xs={9}>
                  <Typography>I need a new returns note</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MenuLeft;
