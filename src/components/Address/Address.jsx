import { Avatar, Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Header from '../UI/Header';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { listAddress } from '../../redux/selectors';
import { useSelector } from 'react-redux';
function Address() {
  const listAddress1 = useSelector(listAddress);
  return (
    <div>
        <Header />
        <Container sx={{ mt: 1 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          MY ACCOUNT
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid container spacing={0.5}>
              <Grid item xs={12}>
                <Box component={"div"} sx={{ backgroundColor: "white", p: 2 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Avatar
                        sx={{ bgcolor: "#2d2d2d", height: 100, width: 100 }}
                      >
                        HP
                      </Avatar>
                    </Grid>
                    <Grid item xs={8} sx={{ pt: 3, pb: 3 }}>
                      <Typography>Hi,</Typography>
                      <Typography variant="h5">Phuong Huynh</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "#e8eaf6", p: 1, display: "flex" ,borderLeft: 5, borderLeftColor: 'blue'}}>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                      <HouseOutlinedIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>Address book</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex"}}>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                      <CreditCardOutlinedIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>Payment methods</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
                <Box sx={{ backgroundColor: "white", p: 1, display: "flex" }}>
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
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "white", p: 3, }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <CreditCardOutlinedIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">YOUR ADDRESS</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        sx={{ borderColor: "black", color: "black" }}
                      >
                        <Typography variant="h6">
                          ADD NEW ADDRESS
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {
                listAddress1.map((l, key) => {
                    return (
                      <Grid item xs={12} key={l.id}>
                        <Box sx={{ backgroundColor: "white", p: 3 }}>
                          <Grid container spacing={1}> 
                            <Grid item xs={12}>
                              <Typography variant="h5">{l.name} </Typography>
                              <Typography variant="body1">{l.address}</Typography>
                              <Typography variant="body1">{l.city}, {l.province}</Typography>
                              <Typography variant="body1">{l.country}</Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={1} sx={{display:'flex',justifyContent:'space-between'}}>
                              <Grid>
                                    <Button sx={{ color: "black" }}>
                                        <Grid container alignItems={"center"}>
                                        <Grid item xs={10}>
                                            <Typography variant="h6">EDIT</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <BorderColorIcon/>
                                        </Grid>
                                        </Grid>
                                    </Button>
                                    
                                    <Button sx={{ color: "black" ,marginLeft:'10px'}} disabled={l.isDefault}>
                                        <Grid container alignItems={"center"}>
                                        <Grid item xs={10}>
                                            <Typography variant="h6">SETDEFAULT</Typography>
                                        </Grid>
                                        </Grid>
                                    </Button>
                              </Grid>
                              <Grid>
                                    <Button sx={{ color: "black" }} disabled={l.isDefault}>
                                        <Grid container alignItems={"center"}>
                                        <Grid item xs={10}>
                                            <Typography variant="h6">DELETE </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <DeleteOutlineIcon fontSize="large" />
                                        </Grid>
                                        </Grid>
                                    </Button>
                              </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    );
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    
    </div>
  )
}
export default Address;
