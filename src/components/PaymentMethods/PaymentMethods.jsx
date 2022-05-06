import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../UI/Header";

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

import { useSelector } from "react-redux";
import { listPaymentMethod } from "../../redux/selectors";
import Method from "./Method";
import ExpiredMethod from "./ExpiredMethod";
import MenuLeft from "../UI/MenuLeft";

const PaymentMethods = () => {
  const listMethod = useSelector(listPaymentMethod);

  return (
    <>
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
                <Box sx={{ backgroundColor: "white", p: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <CreditCardOutlinedIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">PAYMENT METHODS</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        sx={{ borderColor: "black", color: "black" }}
                      >
                        <Typography variant="h6">
                          ADD NEW PAYMENT METHOD
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {listMethod.map((m) => {
                const today = new Date();
                const exp = new Date("20" + m.expYear, m.expMonth);
                return exp > today ? (
                  <Method
                    key={m.id.toString()}
                    id={m.id}
                    method={m.method}
                    expMonth={m.expMonth}
                    expYear={m.expYear}
                    customerName={m.customerName}
                    image={m.image}
                    isDefault={m.isDefault}
                  />
                ) : (
                  <ExpiredMethod
                    key={m.id}
                    id={m.id}
                    method={m.method}
                    expMonth={m.expMonth}
                    expYear={m.expYear}
                    customerName={m.customerName}
                    image={m.image}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default PaymentMethods;
