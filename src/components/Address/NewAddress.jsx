import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addressSlice from "./addressSlice";

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
    name: "",
    address: "",
    city: "",
    province: "",
    country:"",
    isDefault:false
  };
  
  const NewAddress = ({ close }) => {
    const [formValue, setFormValue] = useState(DEFAULT_VALUE);
  
    const handleFormValueChange = (e) => {
      const { name, value } = e.target;
      setFormValue({...formValue, [name]: value});
    };
  
    const dispatch = useDispatch();
  
    const handleAddAddress = () => {
      dispatch(addressSlice.actions.addAddress(formValue));
      close();
    };
  
    return (
      <>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New address
          </Typography>
  
          <TextField
            name="name"
            label="Name"
            sx={{ minWidth: 350, mt: 2 }}
            value={formValue.name}
            onChange={handleFormValueChange}
          >
          </TextField>
          <TextField
            name="address"
            label="Address"
            sx={{ minWidth: 350, mt: 2 }}
            value={formValue.address}
            onChange={handleFormValueChange}
          />
          <TextField
            name="city"
            label="City"
            sx={{ minWidth: 350, mt: 2 }}
            value={formValue.city}
            onChange={handleFormValueChange}
          />
          <TextField
            name="province"
            label="Province"
            sx={{ minWidth: 350, mt: 2 }}
            value={formValue.province}
            onChange={handleFormValueChange}
          />
          <TextField
            name="country"
            label="Country"
            sx={{ minWidth: 350, mt: 2 }}
            value={formValue.country}
            onChange={handleFormValueChange}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleAddAddress}>
            Add address
          </Button>
        </Box>
      </>
    );
  };
  
  export default NewAddress;