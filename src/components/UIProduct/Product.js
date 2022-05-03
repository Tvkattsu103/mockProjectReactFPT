import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './Image';
import data from "./DataImg.json"
import HalfRating from './Rating';
import SpacingGrid from './ImageThuNho';
import BoxSize from './BoxSize';
import BoxWidth from './BoxWidth';
import ContainedButtons from './Button';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Header from '../UI/Header';
import {addToCartPage} from './ProductSlice'

export default function Product() {
    const [image, setImage] = React.useState("https://product.hstatic.net/200000278317/product/giay-da-banh-nike-react-phantom-gt-pro-2-tf-0768-167-trang-do-vang-1_f297487790614c9eaf9ddde1c149c43b_master.jpg")
    const [size, setSize] = React.useState(50)
    const [width, setWidth] = React.useState('Medium')
    const [price, setPrice] = React.useState('50')
    const[name, setName] = React.useState('Giày chạy bộ')
    const dispatch = useDispatch();
    const getDataType = (Type) => (
        setImage(Type)
    )
    const getDataSize = (Size) => {
        setSize(Size)
    }
    const getDataWidth = (Width) => {
        setWidth(Width)
    }

    const getProductToCardPage = (type, size, width, name, price) => {
        let product = {}
        product.type = type;
        product.size = size;
        product.width = width;
        product.name = name;
        product.price = price;
        dispatch(addToCartPage(product))
    }
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={20}>
                <Grid item xs={1}>
                    {/* Content nam ben trai */}
                </Grid>
                <Grid item xs={6}>
                    {/* Content nam ben trai */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        {data.map((item) => (
                            <Grid item xs={6} key={item.id}>
                                <ImgMediaCard img={image} name={name} use={item.use}  price={price} size={size} width={width} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid item xs={8}>
                        <HalfRating />
                    </Grid>
                    <Grid item xs={4}>
                        <SpacingGrid getDataType={(Type) => getDataType(Type)} />
                    </Grid>
                    <Grid item xs={6}>
                        <BoxSize getDataSize={(size) => getDataSize(size)} />
                    </Grid>
                    <Grid item xs={6}>
                        <BoxWidth getDataWidth={(width) => getDataWidth(width)} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => getProductToCardPage(image, size, width,name,price)}>
                            <ContainedButtons />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
