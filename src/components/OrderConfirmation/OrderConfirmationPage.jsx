import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import Header from "../UI/Header";
import ClearIcon from "@mui/icons-material/Clear";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const OrderConfirmation = () => {
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    padding: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "BLACK", fontFamily: "fantasy" }}>MY CART</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{ backgroundColor: "white", padding: 2 }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Box
                        sx={{ height: 200 }}
                        component={"img"}
                        src="https://images.asos-media.com/products/converse-run-star-hike-hi-canvas-platform-sneakers-in-black/200525037-1-black?$n_480w$&wid=476&fit=constrain"
                      ></Box>
                    </Grid>
                    <Grid item xs={7} sx={{ verticalAlign: "center" }}>
                      <Typography
                        variant="h5"
                        sx={{ color: "red", fontFamily: "fantasy" }}
                      >
                        $ 16.50
                      </Typography>
                      <Typography variant="h6">
                        Truffle Collection pool slides in black
                      </Typography>
                      <Typography variant="h6">Black</Typography>
                      <FormControl variant="standard" sx={{ minWidth: 70 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Size
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Size"
                        >
                          <MenuItem value="S">S</MenuItem>
                          <MenuItem value="M">M</MenuItem>
                          <MenuItem value="L">L</MenuItem>
                          <MenuItem value="XL">XL</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="standard"
                        sx={{ width: 100, ml: 1 }}
                      >
                        <TextField
                          id="standard-basic"
                          label="Quantity"
                          variant="standard"
                          type="number"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                      <Button>
                        <ClearIcon sx={{ fontSize: 30, color: "black" }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{
                    backgroundColor: "white",
                    p: 3,
                    justifyContent: "right",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontFamily: "fantasy" }}
                  >
                    SUB-TOTAL&nbsp;&nbsp;&nbsp;$16.50
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{ backgroundColor: "#2d2d2d", padding: 4 }}
                >
                  <Grid container sx={{ color: "white" }}>
                    <Grid item xs={3}>
                      <WorkspacePremiumIcon sx={{ fontSize: 60 }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                        PREMIER DELIVERY USA
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: 18 }}>
                        Enjoy unlimited Next-Day Delivery on all orders of $50+
                        and Express Shipping on all others for a whole year!
                        Ts&Cs apply.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{ backgroundColor: "white", padding: 4 }}
                >
                  <Grid container sx={{ color: "black" }}>
                    <Grid item xs={3}>
                      <LocalShippingIcon sx={{ fontSize: 60 }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                        FREE* STANDARD SHIPPING
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: 18 }}>
                        Faster delivery options available to most countries
                      </Typography>
                      <a href="https://www.asos.com/us/customer-service/delivery/">
                        More info
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Box component={"div"} sx={{ backgroundColor: "white", p: 3 }}>
              <Grid spacing={5}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{ color: "BLACK", fontFamily: "fantasy" }}
                  >
                    TOTAL
                  </Typography>
                </Grid>
                <hr></hr>
                <Grid container>
                  <Grid item xs={9.5}>
                    <Typography variant="h5" sx={{ color: "BLACK" }}>
                      Sub-total
                    </Typography>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography variant="h5" sx={{ color: "BLACK" }}>
                      $16.50
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="h5" sx={{ color: "BLACK" }}>
                      Shipping
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <ErrorOutlineIcon />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="h5" sx={{ color: "BLACK" }}>
                      Sales tax
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <ErrorOutlineIcon />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  fullWidth
                >
                  CHECKOUT
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: "BLACK" }}>
                  WE ACCEPT:
                </Typography>
              </Grid>
              <Grid container xs={12}>
                <Box
                  component={"img"}
                  src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  sx={{ height: 20 }}
                ></Box>
              </Grid>
              <Grid container xs={12}>
                <Typography variant="h6" sx={{ color: "BLACK", fontSize: 15 }}>
                  Got a discount code? Add it in the next step.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default OrderConfirmation;
