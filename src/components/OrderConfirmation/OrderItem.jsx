import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
//import abc from '../../images/converseShoes.webp'

const OrderItem = ({
  id,
  image,
  size,
  price,
  quantity,
}) => {

  return (
    <>
      <Grid item xs={3}>
        <Box component={"img"} src={image} width={100} height={150} />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>${price}</strong>
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1">
                  <strong>Size {size}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Quantity: <strong>{quantity}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
    </>
  );
};

export default OrderItem;
