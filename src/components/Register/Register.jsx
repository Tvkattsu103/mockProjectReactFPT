import { Alert, Button, Container, Grid, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from '../UI/Header';
import registerSlice from './registerSlice';
import { listUser } from '../../redux/selectors';
import axios from 'axios';

function Register() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Province, setProvince] = useState('');
    const [City, setCity] = useState('');
    const [Address, setAddress] = useState('');

    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errRePassword, setErrRePassword] = useState('');
    const [errName, setErrName] = useState('');
    const [errSurname, setErrSurname] = useState('');
    const [errProvince, setErrProvince] = useState('');
    const [errCity, setErrCity] = useState('');
    const [errAddress, setErrAddress] = useState('');

    const dispatch = useDispatch();
    const listUser1 = useSelector(listUser);
    const [open , setOpen] = useState(false);
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeSurname = (e) => {
        setSurname(e.target.value);
    }
    const handleChangeProvince = (e) => {
        setProvince(e.target.value);
    }
    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }
    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    const checkValid = () => {
        let isValid = true;
        //const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (RePassword !== Password) {
            setErrRePassword("RePassword is not same Password");
            isValid = false;
        } else {
            setErrRePassword("");

        }
        return isValid;
    }
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkValid() === true) {
            if (listUser1.find(user => user.email === Email)) {
                setOpen(true);
            }
            else {
                dispatch(registerSlice.actions.addUser({ email: Email, password: Password, name: Name, surname: Surname, province: Province, city: City, address: Address }));
                registerAccount({ email: Email, password: Password, name: Name, surname: Surname, province: Province, city: City, address: Address });
                navigate('/Login');
            }
        }
    }
    const handleBack =()=>{
        navigate('/');
    };
    const registerAccount = (acc) => {
        console.log({data: {...acc}})
        axios.post('http://localhost:1337/api/accounts',{data: {...acc}})
            .then(res => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            
            <Container style={{backgroundColor:'white',padding:'10px'}}>
                <Button onClick={handleBack}>BACK</Button>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <form method='post' onSubmit={handleSubmit}>
                            <Grid item xs={12}>
                                <h5><b>PERSONAL DETAILS</b></h5>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label='Email'
                                    id="outlined-size-small"
                                    value={Email}
                                    placeholder='Enter Email'
                                    type='text'
                                    fullWidth
                                    required
                                    style={{marginTop:'10px'}}
                                    onChange={handleChangeEmail}
                                    error={errEmail !== ""}
                                    helperText={errEmail !== "" ? errEmail : null}
                                />
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={6}>
                                    <TextField
                                        label='Password'
                                        id="outlined-size-small"
                                        value={Password}
                                        placeholder='Enter Password'
                                        type='password'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangePassword}
                                        error={errPassword !== ""}
                                        helperText={errPassword !== "" ? errPassword : null}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label='RePassword'
                                        id="outlined-size-small"
                                        value={RePassword}
                                        placeholder='Enter Re-Password'
                                        type='password'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangeRePassword}
                                        error={errRePassword !== ""}
                                        helperText={errRePassword !== "" ? errRePassword : null}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={6}>
                                    <TextField
                                        label='Name'
                                        id="outlined-size-small"
                                        value={Name}
                                        placeholder='Enter Name'
                                        type='text'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangeName}
                                        error={errName !== ""}
                                        helperText={errName !== "" ? errName : null}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label='Surname'
                                        id="outlined-size-small"
                                        value={Surname}
                                        placeholder='Enter Surname'
                                        type='text'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangeSurname}
                                        error={errSurname !== ""}
                                        helperText={errSurname !== "" ? errSurname : null}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={6}>
                                    <TextField
                                        label='Province'
                                        id="outlined-size-small"
                                        value={Province}
                                        placeholder='Enter Province'
                                        type='text'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangeProvince}
                                        error={errProvince !== ""}
                                        helperText={errProvince !== "" ? errProvince : null}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label='City'
                                        id="outlined-size-small"
                                        value={City}
                                        placeholder='Enter City'
                                        type='text'
                                        fullWidth
                                        required
                                        style={{marginTop:'10px'}}
                                        onChange={handleChangeCity}
                                        error={errCity !== ""}
                                        helperText={errCity !== "" ? errCity : null}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label='Address'
                                    id="outlined-size-small"
                                    value={Address}
                                    placeholder='Enter Address'
                                    type='text'
                                    fullWidth
                                    required
                                    style={{marginTop:'10px'}}
                                    onChange={handleChangeAddress}
                                    error={errAddress !== ""}
                                    helperText={errAddress !== "" ? errAddress : null}
                                />
                            </Grid>
                            <Button type='submit' color='primary' fullWidth style={{ backgroundColor: 'black', color: 'white',marginTop:'10px' }}><b>Register</b></Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Email đã tồn tại!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Register;
