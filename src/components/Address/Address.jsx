import { Avatar, Button, Container, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import MenuLeft from '../UI/MenuLeft';
import addressSlice from "./addressSlice";
import NewAddress from './NewAddress';
function Address() {
  const listAddress1 = useSelector(listAddress);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleAdd = () => setOpen(true);
  const handleCloseAdd = () => setOpen(false);
  const handleChangeDefaultAddress = (id) => {
    dispatch(addressSlice.actions.changDefault(id));
  };
  const handleDeleteAddress = (id) => {
    dispatch(addressSlice.actions.deleteAddress(id));
  };
  return (
    <div>
        <Header />
        <Container sx={{ mt: 1 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          MY ACCOUNT
        </Typography>
        <Grid container spacing={2}>
          <MenuLeft />
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
                        onClick={handleAdd}
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
                                    
                                    <Button sx={{ color: "black" ,marginLeft:'10px'}} disabled={l.isDefault} onClick={()=>handleChangeDefaultAddress(l.id)}>
                                        <Grid container alignItems={"center"}>
                                        <Grid item xs={10}>
                                            <Typography variant="h6">SETDEFAULT</Typography>
                                        </Grid>
                                        </Grid>
                                    </Button>
                              </Grid>
                              <Grid>
                                    <Button sx={{ color: "black" }} disabled={l.isDefault} onClick={()=>handleDeleteAddress(l.id)}>
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
        <Modal
          open={open}
          onClose={handleCloseAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewAddress close={() => handleCloseAdd()}/>
        </Modal>
      </Container>
    
    </div>
  )
}
export default Address;
