import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Register from '../Register/Register';
import Header from '../UI/Header';
import userSlice from './userSlice';
import registerSlice from '../Register/registerSlice'
import { useDispatch, useSelector } from "react-redux";
import { checkUserSelector } from '../../redux/selectors'
import axios from 'axios';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [open, setOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:1337/api/accounts')
            .then(res => {
                return res.data.data
            })
            .then(data => {
                dispatch(registerSlice.actions.initUser(data))
            })
    }, []);

    const checkUser = useSelector(checkUserSelector);
    let navigate = useNavigate();
    const handleBack =()=>{
        navigate('/');
    };
    if (checkUser) {
        navigate('/');
    } else {
        if (isSubmit) {
            setIsSubmit(false);
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const dispatch = useDispatch();
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(userSlice.actions.loginSuccess({ email: Email, password: Password }));


        setIsSubmit(true);
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
        navigate('/Register');
    }


    return (
        <div>
            
            <Grid container spacing={2} style={{backgroundColor:'white',padding:'10px', padding:'50px', width:'90%', margin: 'auto', borderRadius:'25px', marginTop:'100px'}}>
                <Grid item xs={2}>
                    <Button onClick={handleBack}>BACK</Button>
                </Grid>
                <Grid item xs={3}>
                    <form action='#' method='post' onSubmit={handleSubmit}>
                        <h5><b>Đăng nhập:</b></h5>
                        <TextField
                            label='Email'
                            id="outlined-size-small"
                            value={Email}
                            placeholder='Enter Email'
                            type='Email'
                            fullWidth
                            required
                            style={{ marginTop: '10px' }}
                            onChange={handleChangeEmail}
                        />
                        <small >{emailErr}</small>
                        <TextField
                            label='Password'
                            id="outlined-size-small"
                            value={Password}
                            placeholder='Enter Password'
                            type='password'
                            fullWidth
                            required
                            style={{ marginTop: '10px' }}
                            onChange={handleChangePassword}
                        />
                        <small style={{ marginTop: '10px' }}>{passErr}</small>
                        <Button type='submit' color='primary' fullWidth style={{ backgroundColor: 'black', color: 'white', marginTop: '10px' }}><b>Login in</b></Button>
                    </form>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={3}>
                    <form action='#' method='post'>
                        <h5><b>Đăng ký:</b></h5>
                        <p>NẾU QUÝ KHÁCH VẪN CHƯA CÓ TÀI KHOẢN TRÊN GAP.COM, HÃY SỬ DỤNG TÙY CHỌN NÀY ĐỂ TRUY CẬP BIỂU MẪU ĐĂNG KÝ.
                            BẰNG CÁCH CUNG CẤP CHO CHÚNG TÔI THÔNG TIN CHI TIẾT CỦA QUÝ KHÁCH, QUÁ TRÌNH MUA HÀNG TRÊN GAP.COM SẼ LÀ MỘT TRẢI NGHIỆM THÚ VỊ VÀ NHANH CHÓNG HƠN.
                        </p>
                        {/* <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Register now</b></Button> */}
                        <Link to="/Register" fullWidth style={{ backgroundColor: 'black', color: 'white', textDecoration: 'none', border: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'center' }}><b>Register now</b></Link>
                    </form>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Đăng nhập không thành công!
                </Alert>
            </Snackbar>
        </div>

    )
}
export default Login;
