import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, List, ListItem, Stack, ListItemButton, ListItemText, imageListItemClasses, ButtonGroup, Popover, Button } from '@mui/material';
import Header from '../UI/Header';
import Carousel from '../Category/Carousel';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Category() {
    const [category, setCategory] = useState([])

    const getCategories = () => {
        axios
            .get('http://localhost:1337/api/categories?populate=*')
            .then(response => 
                response.data.data
            )
            .then(data => {
                setCategory(data);
                // setUrl("http://localhost:1337" + response.data.data[0].attributes.Image.data[0].attributes.url);
            })
    }
    // const category = [
    //     {
    //         name: 'New Arrivals',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/NEW_ARRIVALS.jpg'
    //     },
    //     {
    //         name: 'Jeans',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/JEANS.jpg'
    //     },
    //     {
    //         name: 'Pants',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/PANTS.jpg'
    //     },
    //     {
    //         name: 'Sweats',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/SWEATS.jpg'
    //     },
    //     {
    //         name: 'Sweaters',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/SWEATERS.jpg'
    //     },
    //     {
    //         name: 'Dresses',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/DRESSES.jpg'
    //     },
    //     {
    //         name: 'Outerwear',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/OUTERWEAR.jpg'
    //     },
    //     {
    //         name: 'Tees',
    //         img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/TEES.jpg'
    //     }
    // ]
    // const listcategory2 = [
    //     'New Arrivals', 'Jeans', 'Dresses', 'Jumpsuits & Rompers', 'T-shirts', 'Shirts & Tops', 'Sweatshirts & Sweatpants',
    //     'Sweaters', 'Outerwear & Jacket', 'Pants', 'Shorts', 'Skirts', 'Swim', 'Shoes & Accessories', 'Gapfit',
    //     'Gapbody', 'Sale'
    // ]
    const data = [
        {
            name: "Pizza Begin",
            link: "pizza-begin.co.il",
        },
        {
            name: "Mia Luz",
            link: "mia-luz.com",
        },
        {
            name: "Nuda Swim",
            link: "nudaswim.com"
        }
    ];
    const images = [
        {
            label: "Toddler Denim Jacket",
            imgPath: "https://www.gap.com/Asset_Archive/GPWeb/content/0028/946/322/Assets/PZ/KTB/SP222007_img_DESK.jpg?v=1",
        },
        {
            label: "100% Organic Classic V-Neck T-Shirt",
            imgPath: "https://www.gap.com/Asset_Archive/GPWeb/content/0028/876/662/assets/PZ/MEN/MEN2/a/SP221763_img2_DESK.jpg",
        },
        {
            label: "Bali, Indonesia",
            imgPath:
                "https://www.gap.com/Asset_Archive/GPWeb/content/0028/876/662/assets/PZ/MEN/MEN2/a/SP221763_img1_DESK.jpg",
        },
        {
            label: "Goč, Serbia",
            imgPath:
                "https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0028/959/445/assets/220418_32_M7935_Neutrals_HPSec_Hero_s2_US_XL.jpg?v=1",
        },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [itemHover, setItemHover] = React.useState(null);
    const categories = [
        { id: 1, name: "NEW" },
        { id: 2, name: "WOMEN" },
        { id: 3, name: "MATERNITY" },
        { id: 4, name: "MEN" },
        { id: 5, name: "TEEN" },
        { id: 6, name: "GIRLS" },
        { id: 7, name: "BOY" },
        { id: 8, name: "TODDLER" },
        { id: 9, name: "BABY" },
        { id: 10, name: "MATCHING" },
        { id: 11, name: "JEANS" },
        { id: 12, name: "SALE" },
        { id: 13, name: "FACTORY" },
    ];

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setItemHover(event.currentTarget.textContent);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=> {
        getCategories();
    }, [])
    console.log("category",category)

    const open = Boolean(anchorEl);
    return (
        <>
            <Header></Header>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box sx={{ backgroundColor: "#81d4fa" }}>
                        <ButtonGroup
                            variant="text"
                            aria-label="text button group"
                            size="large"
                        >
                            {categories.map((ca) => {
                                return (
                                    <Box
                                        key={ca.id}
                                        aria-owns={open ? "mouse-over-popover" : undefined}
                                        aria-haspopup="true"
                                        onMouseOver={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >
                                        <Button >{ca.name}</Button>
                                    </Box>
                                );
                            })}
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: "none",
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                onClose={handlePopoverClose}
                                onMouseLeave={handlePopoverClose}
                            >
                                <Typography sx={{ p: 2 }} >{itemHover} use Popover.</Typography>
                            </Popover>
                        </ButtonGroup>
                    </Box>
                </Grid>
                <Grid container className="category-container" spacing={0}>
                    {category.map(category => (
                        <Grid item xs={3}>
                            <Card style={{ width: '100%' }} className="Card">
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        image={"http://localhost:1337"+category.attributes.Image.data[0].attributes.url}
                                        alt="Paella dish"
                                    />
                                    <Box className="Box"
                                        sx={{
                                            position: 'absolute',
                                            left: '50%',
                                            bottom: '50%',
                                            transform: 'translateX(-50%)',
                                            bgcolor: 'transparent',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography variant="h5" style={{ textTransform: 'uppercase' }}>{category.attributes.Name}</Typography>
                                    </Box>
                                </Box>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={3} >
                        <List component={Stack} direction="row" style={{ padding: '0 7px' }}>
                            <ListItem disablePadding >
                                {category.map(category => (
                                    <ListItemButton style={{ padding: '0' }}>
                                        <ListItemText primary={category.attributes.Name} style={{ padding: '0 12px' }} className="list-category" />
                                    </ListItemButton>
                                ))}
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Grid item xs={3} >
                        <List component={Stack} direction="row" style={{ padding: '0 7px' }}>
                            <ListItem disablePadding >
                                {listcategory2.filter((item, index) => index > 6).map(listcate => (
                                    <ListItemButton style={{ padding: '0' }}>
                                        <ListItemText primary={listcate} style={{ padding: '0 12px' }} className="list-category" />
                                    </ListItemButton>
                                ))}
                            </ListItem>
                        </List>
                    </Grid> */}
                </Grid>
                <Grid
                    container
                    spacing={0}
                    marginTop={7}
                >
                    <Grid item xs={1.5} />
                    <Grid container xs={9} >
                        <Grid item xs={12}>
                            <Typography hy variant="h5">We Know You’ll Love These</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Carousel />
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} />
                </Grid>
            </Grid>
        </>
    );
}

export default Category