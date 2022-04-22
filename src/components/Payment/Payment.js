import { Grid, Box, Typography, Collapse, ListItem, ListItemText, ListItemIcon, List } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Payment() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    function createData(label, info, canChange) {
        return { label, info, canChange };
    }

    const rows = [
        createData('Contact', 'voanhtuan103@gmail.com', true),
        createData('Ship to', '208, Washington DC 20036, United States', true),
        createData('Method', 'Free Shipping (5 to 8 business days) · Free', false)
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
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 'start', mt: 4 }}>BILLING ADDRESS</Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2 }}>Select the address that matches your card or payment method.</Typography>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderColor: '#ccc' }}>
                        <Typography variant="h7">Same as shipping address</Typography>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{ border: 1, borderColor: '#ccc' }}>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Whatever" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderColor: '#ccc' }}>
                        <Typography variant="h7">Use a different billing address</Typography>
                    </ListItem>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 'start', mt: 4 }}>REMEMBER ME</Typography>
                    <ListItem button onClick={handleClick} style={{}} sx={{ border: 1, borderRadius: '10px', borderColor: '#ccc' }}>
                        <Typography variant="h7">Save my information for a faster checkout</Typography>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{ border: 1, borderColor: '#ccc' }}>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Whatever" />
                            </ListItem>
                        </List>
                    </Collapse>

                </Grid>
            </Grid>
            <Grid item xs={5} sx={{ bgcolor: '#efefef' }}></Grid>
        </Grid>
    )
}

export default Payment