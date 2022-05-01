import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, Box, FormControl, InputLabel, Input, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import emailSignUpSlice from './emailSignUpSlice';
import { emailErrSelector, stateEmailSignUp, showOffCodeSelector, emailInputSelector } from './../../redux/selectors';
import axios from 'axios';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: '0',
    },
    '& .MuiDialogActions-root': {
        padding: '0',
    },
    '& .MuiDialog-paper': {
        marginTop: '190px',
        minWidth: '800px',
        minHeight: '600px',
    },
    '& .MuiDialogTitle-root': {
        padding: '0px 16px',
    }
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {/* {onClose ? ( */}
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            {/* ) : null} */}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function EmailSignUp() {
    const dispatch = useDispatch();
    const open = useSelector(stateEmailSignUp);
    console.log(open)
    const emailErr = useSelector(emailErrSelector);
    const showOffCode = useSelector(showOffCodeSelector);
    const emailInput = useSelector(emailInputSelector);


    const handleChange = (e) => {
        dispatch(emailSignUpSlice.actions.changeEmailInput(e.target.value));
    }
    const handleClickOpen = () => {
        dispatch(emailSignUpSlice.actions.changeState(true));
    };
    const handleClose = () => {
        dispatch(emailSignUpSlice.actions.changeState(false));
    };
    React.useEffect(() => {
        handleClickOpen();
    }, [])

    const checkValid = () => {
        let valid = true;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailInput.match(regexEmail)) {
            dispatch(emailSignUpSlice.actions.changeEmailErrState(true));
            valid = false;
        } else {
            dispatch(emailSignUpSlice.actions.changeEmailErrState(false));
        }
        return valid;
    }

    const handleSubmit = () => {
        if (checkValid() === true) {
            dispatch(emailSignUpSlice.actions.changeShowOffCodeState(true));
            console.log({ data:{'UserEmail': emailInput} })
            axios.post('http://localhost:1337/api/email-sign-ups', { data:{'UserEmail': emailInput} }).then(response => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    const handleCopyOffCode = () => {
        const offcode = document.getElementById("offcode");
        navigator.clipboard.writeText(offcode.textContent);
    }

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                sx={{ p: '20px', height: '500px' }}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
                <DialogContent >
                    <Grid container>
                        <Grid item xs={6} sx={{ bgcolor: '#fffbf6', pl: 3, pr: 5 }}>
                            {
                                !showOffCode ? (
                                    <>
                                        <Typography variant='h3' sx={{ lineHeight: '90%', mb: 1, mt: 20 }}>Get $10 off your order.</Typography>
                                        <Typography variant='h6' sx={{ lineHeight: '130%' }}>You'll also get early access to special offers and new products.</Typography>
                                        <FormControl variant='standard' fullWidth sx={{ mt: 10 }}>
                                            <TextField
                                                id="standard-error-helper-text"
                                                label="Email"
                                                value={emailInput}
                                                variant="standard"
                                                onChange={handleChange}
                                                error={emailErr}
                                                helperText={emailErr && 'Email không đúng định dạng'}
                                            />
                                            {/* <Input error helperText="Incorrect entry." id="component-simple" value={emailInput} placeholder='Your email' sx={{ fontSize: '20px' }} onChange={handleChange} /> */}
                                            <Button sx={{ position: 'absolute', right: '0', marginTop: '10px' }} onClick={handleSubmit}>Submit</Button>
                                        </FormControl>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant='h3' sx={{ lineHeight: '90%', mb: 1, mt: 20 }}>Thank You.</Typography>
                                        <Typography variant='h6' sx={{ lineHeight: '130%' }}>Here's your $10 off code:</Typography>
                                        <Typography variant='h3' id="offcode" sx={{ lineHeight: '130%', mt: 15 }}>WELCOME10</Typography>
                                        <Typography variant='subtitle1' color="#9e9e9e" fontStyle="italic" sx={{ lineHeight: '130%', cursor: 'pointer' }} onClick={handleCopyOffCode}>Click to copy</Typography>

                                    </>
                                )
                            }

                        </Grid>
                        <Grid item xs={6}>
                            <Box component="img"
                                src="https://cf.shopee.vn/file/008d7e1f9a3d39ae9d6a7cc09a6c3233"
                                sx={{ width: '399px', height: '596px' }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}