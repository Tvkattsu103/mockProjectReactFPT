import { Button, Container, Grid, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../UI/Header";
import adventure from "../../images/adventure.png";
import more from "../../images/more.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentOrderConfirmSelector } from "../../redux/selectors";
import OrderItem from "./OrderItem";

const OrderConfirmation = () => {
  
  const currentOrederConfirm = useSelector(currentOrderConfirmSelector);

  return (
    <>
      <Header></Header>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{
                    backgroundColor: "white",
                    padding: 3,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        <strong>THANK YOU FOR YOUR ORDER</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="inherit" color={"#757575"}>
                        Please check your inbox, as a confirmation email is on
                        its way
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" color={"#757575"}>
                        <strong>ORDER TOTAL:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        ${currentOrederConfirm.orderTotal}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" color={"#757575"}>
                        <strong>ORDER REFERENCE:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        {currentOrederConfirm.orderReference}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" color={"#757575"}>
                        <strong>DELIVERY:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        {currentOrederConfirm.delivery}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" color={"#757575"}>
                        <strong>ORDER STATUS:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        {currentOrederConfirm.orderStatus}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{ backgroundColor: "white", padding: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {currentOrederConfirm.orderList.length} ITEM
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider></Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        {currentOrederConfirm.orderList.map((p) => {
                          return (
                            <OrderItem
                              key={p.id}
                              id={p.id}
                              name={p.name}
                              image={p.image}
                              description={p.description}
                              type={p.type}
                              size={p.size}
                              price={p.price}
                              quantity={p.quantity}
                            />
                          );
                        })}
                        <Grid item xs={12}>
                          <Grid container rowSpacing={3}>
                            <Grid item xs={12}>
                              <Link to={"#"} sx={{ TextDecoder: "none" }}>
                                <Typography variant="body1" color="black">
                                  Cancel this order
                                </Typography>
                              </Link>
                            </Grid>
                            <Grid item xs={12}>
                              <Link to={"#"} sx={{ TextDecoder: "none" }}>
                                <Typography variant="body1" color="black">
                                  My account
                                </Typography>
                              </Link>
                            </Grid>
                            <Grid item xs={12}>
                              <Link to={"#"} sx={{ TextDecoder: "none" }}>
                                <Typography variant="body1" color="black">
                                  Return Policy
                                </Typography>
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
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
                  }}
                >
                  <Grid container>
                    <Grid item xs={1}>
                      <Typography variant="body1">
                        <strong>
                          <i className="bi bi-recycle"></i>
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="body1">
                        Our plastic bags and cardboard boxes are 100% recylable
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <Link to={"/"}>
                      <Box
                        sx={{
                          backgroundColor: "#424242",
                          color: "white",
                          mt: 3,
                          p: 1,
                        }}
                        fullWidth="lg"
                      >
                        <Typography variant="h6" textAlign={"center"}>
                          <strong>CONTINUE SHOPPING</strong>
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Box
                  component={"div"}
                  sx={{
                    backgroundColor: "#4fc3f7",
                    display: "flex",
                  }}
                >
                  <Grid
                    container
                    rowSpacing={2}
                    p={3}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item sx={12}>
                      <Typography variant="h5">
                        <strong>HAVE YOU SAY</strong>
                      </Typography>
                    </Grid>
                    <Grid item sx={12}>
                      <Typography variant="inherit" textAlign="center">
                        Take our two-minutes survey and tell us what you
                        think...
                      </Typography>
                    </Grid>
                    <Grid item sx={12}>
                      <Button
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          border: 2,
                        }}
                      >
                        <Typography variant="h5">
                          <strong>LET'S GO</strong>
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "white", p: 3 }} fullWidth>
                  <Box component={"img"} src={adventure} width={320} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" textAlign="center">
                  <strong>GET MORE US ON:</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                AAAAAAAAAAAAAA
              </Grid>
              <Grid item xs={12}>
                <Box component={"img"} src={more} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default OrderConfirmation;
