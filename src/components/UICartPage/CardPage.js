import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from '../UIProduct/DataImg.json'
import { color, fontSize, margin, width } from '@mui/system';
import BasicSelect from './Select';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import DiscreteSliderLabel from './Slider';
import { red } from '@mui/material/colors';
import UnderlineLink from './Link';
import Header from '../UI/Header'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToShipping } from './CartPageSlice';
import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Delete, AddCircle, RemoveCircle, Close } from '@mui/icons-material'
import { miniCartItem, subtotal, totaldiscount } from '../../redux/selectors';
import miniCartSlice from '../MiniCart/miniCartSlice';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CardPage() {
    const sum = useSelector(subtotal);
    const discount = useSelector(totaldiscount);

    const [quantity, setQuantity] = React.useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getQuantity = (quantity) => {
        setQuantity(quantity)
    }

    const items = useSelector(miniCartItem);

    const RemoveCartItem = (id) => {
        axios.delete('http://localhost:1337/api/carts/' + id)
            .then(res => {
                console.log(res);
                dispatch(miniCartSlice.actions.deleteItem(id))
            })
    }

    const addQuantity = (id, quantity) => {
        dispatch(miniCartSlice.actions.addQuantity(id))
    }
    const removeQuantity = (id, quantity) => {
        dispatch(miniCartSlice.actions.removeQuantity(id))
    }

    const getProductToShipping = () => {
        navigate("/Shipping")
    }
    // console.log(price);
    return (
        <>
            <Header />
            <div style={{ marginLeft: '200px', marginTop: '50px' }} >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {
                            items.map(item => (
                                <>
                                    <Card sx={{ maxWidth: 750, height: 300, mb: 2 }}>
                                        <Grid container spacing={2}>
                                            {/* <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        image={data.type}
                                    />
                                </Grid> */}
                                            {/* <Grid item xs={4}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Color: red
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Size: {data.size}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Width: {data.width}
                                        </Typography>
                                    </CardContent>
                                    <br />
                                    <div style={{ width: '3px' }} >
                                        <BasicSelect getQuantity={(quantity) => getQuantity(quantity)} />
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {(data.price)}$
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <CloseIcon />
                                            <FavoriteBorderIcon />
                                        </Typography>
                                    </CardContent>
                                </Grid> */}

                                            <Grid item xs={6}>
                                                <CardMedia
                                                    component="img"
                                                    alt="green iguana"
                                                    height="300"
                                                    sx={{ width: '300px' }}
                                                    image={item.image}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className="product-title">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Color: red
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Size: {item?.size}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Width: {item?.width}
                                                    </Typography>
                                                </CardContent>
                                                <br />
                                                <div >
                                                    <Button variant="contained" size="small" style={{ minWidth: '0px' }} disabled={item.quantity === 1 && true} onClick={() => removeQuantity(item.id, item.quantity)}>
                                                        <RemoveCircle />
                                                    </Button>
                                                    <Button variant="outlined" size="small" style={{ minWidth: '30px', paddingTop: '4px', paddingBottom: '4px' }}>
                                                        {item.quantity}
                                                    </Button>
                                                    <Button variant="contained" size="small" style={{ minWidth: '0px' }} onClick={() => addQuantity(item.id, item.quantity)}>
                                                        <AddCircle />
                                                    </Button>
                                                </div>
                                                {/* <div style={{ width: '3px' }} >
                                                    <BasicSelect getQuantity={(quantity) => getQuantity(quantity)} />
                                                </div> */}
                                            </Grid>
                                            <Grid item xs={1}>
                                                <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {(item.price)}$
                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <IconButton sx={{ p: 0 }} onClick={() => RemoveCartItem(item.id)}>
                                                            <CloseIcon />
                                                        </IconButton>
                                                        <FavoriteBorderIcon />
                                                    </Typography>
                                                </CardContent>
                                            </Grid>

                                        </Grid>
                                        <br />
                                    </Card>
                                </>
                            ))
                        }
                        <br />
                        <Stack direction="row" spacing={2} >
                            <ButtonGroup disableElevation variant="contained">
                                <Button
                                    variant="contained" sx={{ width: 350, height: 50 }}
                                >Check out</Button>
                                <div style={{ fontSize: '20px', height: '30px' }} >
                                    <h5 style={{ paddingLeft: '14px', paddingRight: '14px' }}> Or </h5>
                                </div>
                                <Button
                                    variant="contained"
                                    sx={{ width: 350, height: 50, backgroundColor: "ActiveBorder", border: 'black' }}
                                    startIcon={<Avatar src={'https://banner2.cleanpng.com/20190313/wce/kisspng-logo-paypal-x-com-image-brand-5c89a1fc9d8cd6.5075888315525237726453.jpg'} />}
                                >
                                    Paypal
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <h3 style={{ marginLeft: '50px' }}>$30 from 1-2 day shipping</h3>
                            <DiscreteSliderLabel />
                            <CardContent>
                                <Grid container spacing={30}>
                                    <Grid item xs={4}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Subtotal
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {sum}$
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={30}>
                                    <Grid item xs={4}>
                                        <Typography gutterBottom variant="h6" component="div" >
                                            Discount(10%)
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {(parseInt(sum * quantity) * 1) / 10}$
                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={30}>
                                    <Grid item xs={4}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Total
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {discount}$
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions sx={{ p: 0 }}>
                                {/* <Link to="/Shipping"> */}
                                    <Button onClick={() => getProductToShipping()}
                                        variant="contained" sx={{ width: 350, height: 50 }}
                                    >Check out</Button>
                                {/* </Link> */}
                            </CardActions>
                            <div style={{ textAlign: 'center' }}>
                                <CardActions >
                                    <UnderlineLink />
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

            </div >
        </>

    );
}