import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './Image';
import HalfRating from './Rating';
import SpacingGrid from './ImageThuNho';
import BoxSize from './BoxSize';
import BoxWidth from './BoxWidth';
import ContainedButtons from './Button';
import { Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import Header from '../UI/Header';
import { addToCartPage } from './ProductSlice'
import productApi from '../../api/productApi';
import axios from 'axios'
import { ChevronLeftSharp } from '@mui/icons-material';
import { useParams } from 'react-router-dom'
export default function Product() {
    const { title, gia } = useParams();
    const data = useSelector((state) => state.productCardSlice.img)
    console.log(data)
    // console.log(JSON.stringify(title))
    // console.log(JSON.stringify(img))
    const [product, setProduct] = React.useState([])
    const dispatch = useDispatch();
    // React.useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/0854737568aAsSdD/API/main/API.json")
    //     // api da day len web : https://raw.githubusercontent.com/0854737568aAsSdD/API/main/API.json
    //       .then(res => res.json())
    //       .then(product => {   
    //         setProduct(product);
    //         setImage(product[0].name)
    //         setSize(product[0].size)
    //         setWidth(product[0].width)
    //         setPrice(product[0].price)
    //         setName(product[0].type)
    //       })
    //   }, [])   
    // React.useEffect(() => {
    //     const fetchProductList = async () => {
    //         try {
    //             const params = {
    //                 _page: 1,
    //                 _limit: 10,
    //             }
    //             const response = await productApi.getAll(params);
    //             setProduct(response.data)
    //             setImage(response.data[0].attributes.name)
    //             setSize(response.data[0].attributes.size)
    //             setWidth(response.data[0].attributes.width)
    //             setPrice(response.data[0].attributes.price)
    //             setName(response.data[0].attributes.type)
    //         } catch (error) {
    //             console.log("Fail to fetch product list", error);
    //         }npm s
    //     }
    //     fetchProductList();
    // }, []);
    const [image, setImage] = React.useState(data)
    const [size, setSize] = React.useState()
    const [width, setWidth] = React.useState()
    const [price, setPrice] = React.useState(gia)
    const [name, setName] = React.useState(title)
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
        let data = {
            data: {
            }
        }
        //data.data.id = 4;
        data.data = product;
        addToCartTuan(data)
        console.log(data);
        dispatch(addToCartPage(product))
    }
    const addToCartTuan = (product) => {
        // const addToCart = async () => {
        //     try {
        //         const response = await productApi.addToCartPage(product);
        //         console.log("responday")
        //         console.log(response)
        //     } catch (error) {
        //         console.log("Lỗi khi add", error);
        //     }
        // }
        // addToCart();
        axios.post('http://localhost:1337/api/carts', product).then(res => console.log(res))
    }
    return (
        <>
            {console.log(image)}
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        {/* Content nam ben trai */}
                    </Grid>
                    <Grid item xs={6}>
                        {/* Content nam ben trai */}
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item xs={6} >
                                <ImgMediaCard img={image} name={name} price={price} size={size} width={width} />
                            </Grid>
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
                            <Button onClick={() => getProductToCardPage(image, size, width, name, price)}>
                                <ContainedButtons />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
