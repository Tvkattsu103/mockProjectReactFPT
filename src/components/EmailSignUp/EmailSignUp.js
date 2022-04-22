import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, Box, FormControl, InputLabel, Input } from '@mui/material';

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
            {onClose ? (
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
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [modalState, setModalState] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    React.useEffect(() => {
        handleClickOpen();
    }, [])

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ p: '20px', height: '500px' }}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
                <DialogContent >
                    <Grid container>
                        <Grid item xs={6} sx={{ bgcolor: '#fffbf6', pl: 3, pr: 5 }}>
                            <Typography variant='h3' sx={{ lineHeight: '90%', mb: 1, mt: 20 }}>Get $10 off your order.</Typography>
                            <Typography variant='h6' sx={{ lineHeight: '130%' }}>You'll also get early access to special offers and new products.</Typography>
                            <FormControl variant="standard" fullWidth sx={{mt:10}}>
                                {/* <InputLabel htmlFor="component-simple">Name</InputLabel> */}
                                <Input id="component-simple" value="" placeholder='Your email' sx={{fontSize: '20px'}}/>
                                <Button sx={{position: 'absolute', right: '0'}}>Test</Button>
                            </FormControl>
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