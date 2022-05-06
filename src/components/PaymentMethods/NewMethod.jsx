import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import paymentMethodSlice from "./paymentMethodSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DEFAULT_VALUE = {
  type: "",
  month: "",
  year: "",
  name: "",
};

const NewMethod = ({ close }) => {
  const [formValue, setFormValue] = useState(DEFAULT_VALUE);

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormValue({...formValue, [name]: value});
  };

  const dispatch = useDispatch();

  const handleAddMethod = () => {
    dispatch(paymentMethodSlice.actions.addMethod(formValue));
    close();
  };

  return (
    <>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          New payment method
        </Typography>

        <TextField
          name="type"
          select
          label="Type method"
          sx={{ minWidth: 350, mt: 2 }}
          value={formValue.type}
          onChange={handleFormValueChange}
        >
          <MenuItem value={"Visa debbit"}>{"Visa debbit"}</MenuItem>
          <MenuItem value={"Master card"}>{"Master card"}</MenuItem>
        </TextField>
        <TextField
          name="month"
          label="ExpMonth: MM"
          sx={{ minWidth: 350, mt: 2 }}
          value={formValue.mont}
          onChange={handleFormValueChange}
        />
        <TextField
          name="year"
          label="ExpYear: yy"
          sx={{ minWidth: 350, mt: 2 }}
          value={formValue.year}
          onChange={handleFormValueChange}
        />
        <TextField
          name="name"
          label="Full Name"
          sx={{ minWidth: 350, mt: 2 }}
          value={formValue.name}
          onChange={handleFormValueChange}
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleAddMethod}>
          Add method
        </Button>
      </Box>
    </>
  );
};

export default NewMethod;
