import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import Header from '../UI/Header';

function Login() {
    const [Username , setUserName] = useState('');
    const [Password, setPassword] =useState('');
    const [userErr , setUserErr] = useState('');
    const [passErr, setPassErr] =useState('');
    const handleChangeUsername=(e)=>{
        setUserName(e.target.value);
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const checkLogin = ()=>{
        let isValid = true;
        if(Username!=="thehuy"){
          isValid = false;
          setUserErr("User is not correct");
        }else{
          setUserErr("");
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
        if(checkLogin()==true){
            alert("Login successful")
        }else{
            alert("Login fail")
        }
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
                    label='Username' 
                    id="outlined-size-small" 
                    value={Username} 
                    placeholder='Enter Username' 
                    type='text' 
                    fullWidth 
                    required 
                    onChange={handleChangeUsername}
                    />
                    <small className="text-danger">{userErr}</small>
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
                    <small className="text-danger">{passErr}</small>
                    <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Login in</b></Button>
                </form>
            </Grid>
            <Grid item xs={1}>
                
            </Grid>
            <Grid item xs={3}>
                <form action='#' method='post' onSubmit={handleSubmit2}>
                    <h5><b>Đăng ký:</b></h5>
                    <p>NẾU QUÝ KHÁCH VẪN CHƯA CÓ TÀI KHOẢN TRÊN ZARA.COM, HÃY SỬ DỤNG TÙY CHỌN NÀY ĐỂ TRUY CẬP BIỂU MẪU ĐĂNG KÝ.
                        BẰNG CÁCH CUNG CẤP CHO CHÚNG TÔI THÔNG TIN CHI TIẾT CỦA QUÝ KHÁCH, QUÁ TRÌNH MUA HÀNG TRÊN ZARA.COM SẼ LÀ MỘT TRẢI NGHIỆM THÚ VỊ VÀ NHANH CHÓNG HƠN.
                    </p>
                    <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Register now</b></Button>
                </form>
            </Grid>
        </Grid>

    </div>

    )
}
export default Login;
