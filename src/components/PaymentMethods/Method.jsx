import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import paymentMethodSlice from "./paymentMethodSlice";

const Method = ({ id, method, expMonth, expYear, customerName, image , isDefault }) => {

  const dispatch = useDispatch();

  const handleDeleteMethod = () => {
    dispatch(paymentMethodSlice.actions.deleteMethod(id));
  };

  return (
    <>
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: "white", p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Box
                component={"img"}
                src={image}
                alt="visa card image"
                height={50}
                width={50}
                marginTop={-1}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">{method}</Typography>
              <Typography variant="h6">
                Exp: {expMonth}/{expYear}{" "}
              </Typography>
              <Typography variant="h6">{customerName}</Typography>
            </Grid>
            <Grid item xs={3} textAlign="right">
              <Button sx={{ color: "black" }} disabled={isDefault} onClick={handleDeleteMethod}>
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
            {isDefault && 
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "silver" }}>
                This is your default payment method
              </Typography>
            </Grid>
            }
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
export default Method;
