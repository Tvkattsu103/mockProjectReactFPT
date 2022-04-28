import { Button, Grid, TextField } from '@mui/material';
import { height } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes , Link } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Register from '../Register/Register';
import Header from '../UI/Header';
import userSlice  from './userSlice';
import { useDispatch, useSelector } from "react-redux";
import {checkUserSelector} from '../../redux/selectors'


function Login() {
    const [Email , setEmail] = useState('');
    const [Password, setPassword] =useState('');
    const [emailErr , setEmailErr] = useState('');
    const [passErr, setPassErr] =useState('');

    const checkUser = useSelector(checkUserSelector);
    console.log(checkUser);
    if(checkUser){
        alert("Đăng nhập thành công");
    }
    const dispatch = useDispatch();
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const checkLogin = ()=>{
        let isValid = true;
        if(Email!=="thehuy@gmail.com"){
          isValid = false;
          setEmailErr("User is not correct");
        }else{
          setEmailErr("");
        }
        if(Password!=="123456"){
          isValid = false;
          setPassErr("Pass is not correct");
        }else{
          setPassErr("");
        }
        return isValid;
      }
    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(userSlice.actions.loginSuccess({email:Email,password:Password}));
    }
    const handleSubmit2=(e)=>{
        e.preventDefault();
        //link to Register.js
        
        
    }
    
    return (
    <div>
        <Header/>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                
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
                    onChange={handleChangePassword}
                    />
                    <small >{passErr}</small>
                    <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Login in</b></Button>
                </form>
            </Grid>
            <Grid item xs={1}>
                
            </Grid>
            <Grid item xs={3}>
                <form action='#' method='post' onSubmit={handleSubmit2}>
                    <h5><b>Đăng ký:</b></h5>
                    <p>NẾU QUÝ KHÁCH VẪN CHƯA CÓ TÀI KHOẢN TRÊN GAP.COM, HÃY SỬ DỤNG TÙY CHỌN NÀY ĐỂ TRUY CẬP BIỂU MẪU ĐĂNG KÝ.
                        BẰNG CÁCH CUNG CẤP CHO CHÚNG TÔI THÔNG TIN CHI TIẾT CỦA QUÝ KHÁCH, QUÁ TRÌNH MUA HÀNG TRÊN GAP.COM SẼ LÀ MỘT TRẢI NGHIỆM THÚ VỊ VÀ NHANH CHÓNG HƠN.
                    </p>
                    {/* <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Register now</b></Button> */}
                    <Link to="/Register" fullWidth style={{backgroundColor:'black',color:'white',textDecoration:'none', border:'1px solid black',padding:'10px',display:'flex',justifyContent:'center'}}><b>Register now</b></Link>
                </form>    
            </Grid>
        </Grid>
        
    </div>

    )
}
export default Login;
