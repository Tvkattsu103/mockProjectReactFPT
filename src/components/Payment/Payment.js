import { Box, Button, Collapse, Divider, Grid, List, ListItem, ListItemText, Typography, InputBase, Badge } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { totaldiscount, shipCount } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        padding: '12px 5px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Payment() {
    const discount = useSelector(totaldiscount);
    const ship = useSelector(shipCount);
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    function createData(label, info, canChange) {
        return { label, info, canChange };
    }

    const rows = [
        createData('Contact', currentUser.email, true),
        createData('Ship to', currentUser.address+", "+currentUser.province+", "+currentUser.city, true),
        createData('Method', 'Shipping (5 to 8 business days) · $'+ship, false)
    ];
    return (
        <Grid container >
            <Grid container xs={7} sx={{ bgcolor: 'white', minHeight: '100vh', borderRight: 1, borderColor: '#ccc', display: 'flex', justifyContent: 'end' }}>
                <Grid item xs={9} sx={{ pt: 6, pr: 10 }}>
                    <Box component="img"
                        src="https://cdn.shopify.com/s/files/1/0130/2514/8987/files/Versed_single_line_logo.png?82262"
                        sx={{ width: 170, display: 'block', margin: 'auto' }}
                    />
                    <TableContainer component={Paper} sx={{ border: 1, borderRadius: '10px', borderColor: '#ccc', mt: 4, mb: 4 }}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.label}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell scope="row">
                                            {row.label}
                                        </TableCell>
                                        <TableCell align="left">{row.info}</TableCell>
                                        <TableCell align="right">{row.canChange && <Typography variant="h7" sx={{ color: '#9bdbb9' }}>Change</Typography>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 'start' }}>PAYMENT</Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2 }}>All transactions are secure and encrypted.</Typography>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderColor: '#ccc' }}>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h7">Credit Card</Typography>
                            </Grid>
                            <Grid item>
                                <Box component="img" sx={{ mr: 0.5 }} src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" />
                                <Box component="img" sx={{ mr: 0.5 }} src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" />
                                <Box component="img" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{ border: 1, borderColor: '#ccc' }}>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Whatever" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderColor: '#ccc' }}>
                        <Box component="img" sx={{ width: 100 }} src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png" />
                    </ListItem>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderColor: '#ccc' }}>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h7">Afterpay</Typography>
                            </Grid>
                            <Grid item>
                                <Box component="img" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/afterpay-c814f73b45b605f4c618ce52eb8c67427d3ae3cb8addb872e621dfbabae0b5f0.svg" />
                            </Grid>
                        </Grid>
                    </ListItem>
                    
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                        <Grid item>
                            <Typography variant="h7" sx={{ color: '#9bdbb9' }}>Return to shipping</Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/CheckoutReview" className="Button">
                                <Button sx={{ padding: 2, bgcolor: 'black', color: 'white' }} >Pay now</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mt: 7 }} />
                    <Typography variant="caption" sx={{ color: '#9bdbb9', mt: 2, mb: 3, display: 'block' }}>Subscription policy</Typography>
                </Grid>
            </Grid>
            <Grid container xs={5} sx={{ bgcolor: '#efefef' }} >
                <Grid xs={10} sx={{ pt: 6, pl: 10 }} >
                    <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', pt: 1.5 }}>
                        <Badge badgeContent={4} color="primary">
                            <CardMedia
                                component="img"
                                sx={{ width: '70px', height: '70px', borderRadius: '10px' }}
                                image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
                                alt="Live from space album cover"
                            />
                        </Badge>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                            <Grid
                                justifyContent="space-between"
                                alignItems="center"
                                container
                            >
                                <Grid item>
                                    <Typography component="div" variant="h7" fontWeight="bold">
                                        The Weekend Spring Dress
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    $24.99
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Divider sx={{ mt: 3 }} />
                    <Grid justifyContent="space-between"
                        alignItems="center"
                        container
                        sx={{ mt: 2 }}
                    >
                        <Grid item>
                            <Typography component="div" variant="h7">
                                Subtotal
                            </Typography>
                        </Grid>
                        <Grid item>
                            ${discount}
                        </Grid>
                    </Grid>
                    <Grid justifyContent="space-between"
                        alignItems="center"
                        container
                        sx={{ mt: 1 }}
                    >
                        <Grid item>
                            <Typography component="div" variant="h7">
                                Shipping
                            </Typography>
                        </Grid>
                        <Grid item>
                            ${ship}
                        </Grid>
                    </Grid>
                    <Divider sx={{ mt: 3 }} />
                    <Grid justifyContent="space-between"
                        alignItems="center"
                        container
                        sx={{ mt: 1, mb: 4 }}
                    >
                        <Grid item>
                            <Typography component="div" variant="h7">
                                Total
                            </Typography>
                        </Grid>
                        <Grid item alignItems={'center'} display='flex'>
                            <Typography component="span" variant="caption" sx={{ mr: 1 }}>
                                USD
                            </Typography>
                            <Typography component="span" variant="h5">
                                ${discount+ship}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography component="span" variant="h7" fontWeight={'bold'} sx={{ mr: 1, textTransform: 'uppercase' }}>
                        We think you'd like these too
                    </Typography>
                    <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', mt: 2.5 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 110, height: 110 }}
                            image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="button" fontWeight={'bold'} sx={{ textTransform: 'uppercase', lineHeight: '0px', mb: 0.5 }}>
                                Dew Point - Full Size 2 FL. 0Z.
                            </Typography>
                            <Typography component="div" variant="overline" sx={{ textTransform: 'uppercase' }}>
                                Moisturizing gel-cream
                            </Typography>
                            <Typography component="div" variant="h7" fontWeight={'bold'} sx={{ textTransform: 'uppercase' }}>
                                $14.19
                            </Typography>
                            <Button sx={{ padding: 0.5, bgcolor: 'black', color: 'white', textTransform: 'uppercase' }} fullWidth>Add to bag</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', mt: 2.5 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 110, height: 110 }}
                            image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="button" fontWeight={'bold'} sx={{ textTransform: 'uppercase', lineHeight: '0px', mb: 0.5 }}>
                                Dew Point - Full Size 2 FL. 0Z.
                            </Typography>
                            <Typography component="div" variant="overline" sx={{ textTransform: 'uppercase' }}>
                                Moisturizing gel-cream
                            </Typography>
                            <Typography component="div" variant="h7" fontWeight={'bold'} sx={{ textTransform: 'uppercase' }}>
                                $14.19
                            </Typography>
                            <Button sx={{ padding: 0.5, bgcolor: 'black', color: 'white', textTransform: 'uppercase' }} fullWidth>Add to bag</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', mt: 2.5 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 110, height: 110 }}
                            image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="button" fontWeight={'bold'} sx={{ textTransform: 'uppercase', lineHeight: '0px', mb: 0.5 }}>
                                Dew Point - Full Size 2 FL. 0Z.
                            </Typography>
                            <Typography component="div" variant="overline" sx={{ textTransform: 'uppercase' }}>
                                Moisturizing gel-cream
                            </Typography>
                            <Typography component="div" variant="h7" fontWeight={'bold'} sx={{ textTransform: 'uppercase' }}>
                                $14.19
                            </Typography>
                            <Button sx={{ padding: 0.5, bgcolor: 'black', color: 'white', textTransform: 'uppercase' }} fullWidth>Add to bag</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Payment