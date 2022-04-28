import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Header from '../UI/Header';
import registerSlice from './registerSlice';
import { listUser } from '../../redux/selectors';
function Register() {
    const [Email , setEmail] = useState('');
    const [Password, setPassword] =useState('');
    const [RePassword , setRePassword] = useState('');
    const [Name, setName] = useState('');
    const [Surname , setSurname] = useState('');
    const [Province, setProvince] = useState('');
    const [City, setCity] = useState('');
    const [Address, setAddress] = useState('');

    const [errEmail , setErrEmail] = useState('');
    const [errPassword, setErrPassword] =useState('');
    const [errRePassword , setErrRePassword] = useState('');
    const [errName, setErrName] = useState('');
    const [errSurname , setErrSurname] = useState('');
    const [errProvince, setErrProvince] = useState('');
    const [errCity, setErrCity] = useState('');
    const [errAddress, setErrAddress] = useState('');

    const dispatch = useDispatch();
    const listUser1 = useSelector(listUser);
    
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleChangeRePassword=(e)=>{
        setRePassword(e.target.value);
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeSurname=(e)=>{
        setSurname(e.target.value);
    }
    const handleChangeProvince=(e)=>{
        setProvince(e.target.value);
    }
    const handleChangeCity=(e)=>{
        setCity(e.target.value);
    }
    const handleChangeAddress=(e)=>{
        setAddress(e.target.value);
    }
    const checkValid = ()=>{
        let isValid = true;
        const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        
        
        if(RePassword!==Password){
            setErrRePassword("RePassword is not same Password");
        }else{
            setErrRePassword("");
        }
        return isValid;
      }
    const handleSubmit =(e)=>{
        e.preventDefault();
        // if(checkValid==true){
        //     alert("Register Successful")
        // }else{
        //     alert("Register Fail")
        // }
        
        if(listUser1.find(user=> user.email===Email)){
            alert("Email đã tồn tại")
        }
        else{
            dispatch(registerSlice.actions.addUser({email:Email,password:Password,name:Name,surname:Surname,province:Province,city:City,address:Address}));
        }
    }
    return (
    <div>
        <Header/>
        <Container>
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
                    onChange={handleChangeEmail}
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
                        onChange={handleChangePassword}
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
                        onChange={handleChangeRePassword}
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
                        onChange={handleChangeName}
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
                        onChange={handleChangeSurname}
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
                        onChange={handleChangeProvince}
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
                        onChange={handleChangeCity}
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
                    onChange={handleChangeAddress}
                    />
                </Grid>
                <Button type='submit' color='primary' fullWidth style={{backgroundColor:'black',color:'white'}}><b>Register</b></Button>
                </form>
           </Grid>
            
        </Grid>
        </Container>
    </div>
    )
}

export default Register;
